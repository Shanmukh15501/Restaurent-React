import { useEffect, useState } from "react";
import RCard from "./Restaurant_card";
import { getRestaurants } from "../api/restaurants.api.js";
import ShimmerUI from "./ShimmerUI.js";

const RContainer = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurants(
          "https://namastedev.com/api/v1/listRestaurants1"
        );
        setRestaurants(data);
        console.log("data", data);
      } catch (err) {
        console.error("Error loading restaurants", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="restaurant-class">
      {restaurants.length == 0 ? (
        <ShimmerUI />
      ) : (
        restaurants.map((restaurant) => (
          <RCard
            key={restaurant.info.name} // ideally use restaurant.info.id if available
            name={restaurant.info.name}
            locality={restaurant.info.locality}
            cuisines={restaurant.info.cuisines}
            avgRating={restaurant.info.avgRating}
          />
        ))
      )}
    </div>
  );
};

export default RContainer;