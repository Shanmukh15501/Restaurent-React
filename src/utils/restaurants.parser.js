// src/utils/restaurants.parser.js
export function extractRestaurants(json) {
  try {
    if (!json) {
      throw new Error('API response is empty');
    }

    if (json.status !== true) {
      throw new Error(
        json.message || 'Failed to fetch restaurants'
      );
    }

    const data = json.data;
    if (!data || typeof data !== 'object') {
      throw new Error('Missing data in API response');
    }

    const cards = json?.data?.data?.cards || [];
    if (!Array.isArray(cards)) {
      throw new Error('Invalid cards format in API response');
    }

    for (let i = 0; i < cards.length; i++) {
      const restaurants =
        cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (Array.isArray(restaurants)) {
        return restaurants;
      }
    }

    throw new Error('No restaurants found in API response');
  } catch (error) {
    throw error;
  }
}