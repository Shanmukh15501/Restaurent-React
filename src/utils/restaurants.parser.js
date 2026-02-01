// src/utils/restaurants.parser.js
export function extractRestaurants(json) {
  try {
    if (!json) return [];

    var cards = json?.data?.data?.cards || [];
    if (!Array.isArray(cards)) return [];

    for (var i = 0; i < cards.length; i++) {
      var restaurants =
        cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (Array.isArray(restaurants)) {
        return restaurants;
      }
    }

    return [];
  } catch (error) {
    console.error("extractRestaurants failed:", error);
    return [];
  }
}