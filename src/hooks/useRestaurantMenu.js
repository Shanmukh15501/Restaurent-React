import { useState, useEffect } from 'react';
import { getRestaurantMenu } from '../api/restaurants.api.js';
import { VITE_API_BASE_URL } from "../utils/Constants.js";


export const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantMenu(
          `${VITE_API_BASE_URL}/listRestaurantMenu/${restaurantId}`
        );
        setRestaurantInfo(data?.restaurantInfo || null);
        setMenuItems(data?.itemCategories || []);
      } catch (err) {
        console.error('Error loading restaurant-menu data', err);
      } finally {
                setLoading(false);
      }
    };

    if (restaurantId) {
      fetchData();
    }
  }, [restaurantId]);

  return { restaurantInfo, menuItems, loading };
};
