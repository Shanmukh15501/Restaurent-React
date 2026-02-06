export function extractRestaurantMenu(json) {
  try {
    if (!json) {
      throw new Error('Menu API response is empty');
    }

    if (json.status !== true) {
      throw new Error(
        json.message || 'Failed to fetch restaurant menu'
      );
    }

    const data = json.data;
    if (!data || !Array.isArray(data.cards)) {
      throw new Error('Missing menu cards in API response');
    }

    let restaurantInfo = null;
    let itemCategories = [];

    for (let i = 0; i < data.cards.length; i++) {
      const card = data.cards[i];

      // 🏪 Restaurant info
      const info = card?.card?.card?.info;
      if (info && info.id && info.name) {
        restaurantInfo = info;
      }

      // 🍔 Menu categories
      const regularCards =
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      if (Array.isArray(regularCards)) {
        for (let j = 0; j < regularCards.length; j++) {
          const categoryCard = regularCards[j]?.card?.card;

          if (
            categoryCard?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
          ) {
            itemCategories.push(categoryCard);
          }
        }
      }
    }

    if (!restaurantInfo) {
      throw new Error('Restaurant info not found in API response');
    }

    return {
      restaurantInfo,
      itemCategories,
    };
  } catch (error) {
    throw error;
  }
}