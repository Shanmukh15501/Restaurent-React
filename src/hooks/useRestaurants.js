import { useState, useEffect } from 'react';
import { getRestaurants } from '../api/restaurants.api.js';
import { VITE_API_BASE_URL } from '../utils/Constants.js';

export const useRestaurants = () => {
  // 🔹 State
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch restaurants on mount
  useEffect(function fetchAllRestaurantsEffect() {
    async function fetchAllRestaurants() {
      // Clear previous state
      setError(null);

      try {
        // Fetch data from API
        const restaurantsUrl = `${VITE_API_BASE_URL}/listRestaurants`;
        const data = await getRestaurants(restaurantsUrl);

        // Update state with fetched data
        setAllRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        // Handle errors gracefully
        const errorMsg =
          err?.message || 'Failed to load restaurants. Please try again.';
        setError(errorMsg);
      } finally {
        // Always stop loading
        setLoading(false);
      }
    }

    fetchAllRestaurants();
  }, []);

  // 🔹 Return hook state
  return {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  };
};
