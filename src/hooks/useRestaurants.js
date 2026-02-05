import { useState, useEffect } from 'react';
import { getRestaurants } from '../api/restaurants.api.js';
import { VITE_API_BASE_URL } from "../utils/Constants.js";


export const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants(
          `${VITE_API_BASE_URL}/listRestaurants`
        );
        setAllRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        console.error('Error loading restaurants', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allRestaurants, filteredRestaurants, setFilteredRestaurants, loading };
};
