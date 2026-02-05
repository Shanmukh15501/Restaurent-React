// src/utils/restaurants.parser.js
export function extractRestaurants(json) {
  try {
    if (!json) return [];

    if (json.status !== true) {
      return {
        error: json.message || "Failed to fetch restaurant menu",
      };
    }
    
    const data = json.data;
    if (!data || typeof data !== "object") {
      return { error: "Missing data in API response" };
    }

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