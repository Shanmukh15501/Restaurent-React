import { useState, useEffect } from 'react';
import { getRestaurantMenu } from '../api/restaurants.api.js';
import { VITE_API_BASE_URL } from '../utils/Constants.js';

export const useRestaurantMenu = (restaurantId) => {
  // 🔹 State
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Trigger fetch when restaurantId changes
  useEffect(function fetchMenuEffect() {
    async function fetchMenuData() {
      // Clear previous state
      setError(null);
      setLoading(true);

      try {
        // Build API URL and fetch
        const menuUrl = `${VITE_API_BASE_URL}/listRestaurantMenu/${restaurantId}`;
        const data = await getRestaurantMenu(menuUrl);

        // Update state with fetched data
        setRestaurantInfo(data?.restaurantInfo || null);
        setMenuItems(data?.itemCategories || []);
      } catch (err) {
        // Handle errors gracefully
        const errorMsg =
          err?.message || 'Failed to load restaurant menu. Please try again.';
        setError(errorMsg);
      } finally {
        // Always stop loading
        setLoading(false);
      }
    }

    if (restaurantId) {
      fetchMenuData();
    }
  }, [restaurantId]);

  // 🔹 Return hook state
  return { restaurantInfo, menuItems, loading, error };
};
