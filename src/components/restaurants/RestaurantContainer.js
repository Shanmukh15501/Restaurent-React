import { useState } from 'react';
import RCard from './RestaurantCard.js';
import { useRestaurants } from '../../hooks/useRestaurants.js';
import ShimmerUI from '../common/ShimmerUI.js';

const RContainer = () => {
  const restaurantsState = useRestaurants();
  const {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
  } = restaurantsState;
  const [searchText, setSearchText] = useState('');

  // ⭐ Top Rated filter
  const handleTopRated = () => {
    const topRated = allRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurants(topRated);
  };

  // 🔍 Search filter (live)
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredRestaurants(filtered);
  };

  // ⏳ Show shimmer only while loading
  if (loading) {
    return <ShimmerUI />;
  }

  return (
    <>
      <div className="btn-class">
        <button className="top-rated-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>

        <input
          type="text"
          className="search-bar"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <div className="restaurant-class">
        {filteredRestaurants.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RCard
              key={restaurant.info.id}
              id={restaurant.info.id}
              name={restaurant.info.name}
              locality={restaurant.info.locality}
              cuisines={restaurant.info.cuisines}
              avgRating={restaurant.info.avgRating}
            />
          ))
        )}
      </div>
    </>
  );
};

export default RContainer;
