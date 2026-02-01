import { useEffect, useState } from "react";
import RCard from "./Restaurant_card";
import { getRestaurants } from "../api/restaurants.api.js";
import ShimmerUI from "./ShimmerUI.js";

const RContainer = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  // 🔹 What UI shows
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // 🔹 Controlled input
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurants(
          "https://namastedev.com/api/v1/listRestaurants"
        );
        setAllRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        console.error("Error loading restaurants", err);
      }
    }

    fetchData();
  }, []);

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
  if (allRestaurants.length === 0) {
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
              key={restaurant.info.id || restaurant.info.name}
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