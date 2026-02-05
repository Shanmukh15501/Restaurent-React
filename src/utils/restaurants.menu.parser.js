export function extractRestaurantMenu(json) {
  if (!json || json.status !== true) return null;

  const data = json.data;
  if (!data || !Array.isArray(data.cards)) return null;

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
          categoryCard?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          itemCategories.push(categoryCard);
        }
      }
    }
  }

  return {
    restaurantInfo,
    itemCategories,
  };
}