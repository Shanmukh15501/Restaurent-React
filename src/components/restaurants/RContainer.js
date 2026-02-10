import { useState } from "react";
import { useRestaurants } from "../../hooks/useRestaurants";
import ShimmerUI from "../common/ShimmerUI";
import RCard, { ResVegCard } from "./RCard";

// ✅ Wrap the card ONCE (HOC usage)

const RContainer = () => {

   const VegRCard = ResVegCard(RCard);

  const {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  } = useRestaurants();

  const [searchText, setSearchText] = useState("");

  // ⭐ Top Rated filter
  const handleTopRated = () => {
    const topRated = allRestaurants.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurants(topRated);
  };

  // 🔍 Search filter
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredRestaurants(filtered);
  };

  // ⏳ Loading state
  if (loading) {
    return <ShimmerUI />;
  }

  // ❌ Error state
  if (error) {
    return (
      <div
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: "#f8d7da",
          border: "1px solid #f5c6cb",
          color: "#721c24",
          borderRadius: "4px",
        }}
      >
        <h3>Error Loading Restaurants</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between px-4 py-2">
        <button className="border border-2" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>

        <input
          type="text"
          className="border border-2"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          filteredRestaurants.map((restaurant) => {
            const { id, name, locality, cuisines, avgRating, veg } =
              restaurant.info;
            return veg ? (
              <VegRCard
                key={id}
                id={id}
                name={name}
                locality={locality}
                cuisines={cuisines}
                avgRating={avgRating}
              />
            ) : (
              <RCard
                key={id}
                id={id}
                name={name}
                locality={locality}
                cuisines={cuisines}
                avgRating={avgRating}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default RContainer;
