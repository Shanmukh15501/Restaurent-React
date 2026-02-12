import { useParams } from "react-router";
import { useRestaurantMenu } from "../../hooks/useRestaurantMenu.js";
import ShimmerUI from "../common/ShimmerUI.js";
import RestaurantItemCategories from "./RCategories.js";
import { useState } from "react";

const RMenu = () => {
  const { rid } = useParams();
  const menuState = useRestaurantMenu(rid);
  const { restaurantInfo, menuItems, loading, error } = menuState;

  // 🔥 This holds which accordion is open
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  if (loading) {
    return <ShimmerUI />;
  }

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
        <h3>Error Loading Menu</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!restaurantInfo) {
    return (
      <div
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: "#fff3cd",
          border: "1px solid #ffeeba",
          color: "#856404",
          borderRadius: "4px",
        }}
      >
        <h3>Restaurant not found</h3>
        <p>Please try selecting another restaurant.</p>
      </div>
    );
  }

  return (
    <div className="m-2 p-2 text-center">
      <h2 className="font-bold my-1">Name - {restaurantInfo.name}</h2>
      <h2 className="font-bold my-1">Locality - {restaurantInfo.locality}</h2>

      {menuItems.map((menu, index) => (
        <RestaurantItemCategories
          key={menu?.title || index}
          index={index}
          category={menu.title}
          items={menu.itemCards}
          isOpen={openCategoryIndex === index}
          setOpenCategoryIndex={setOpenCategoryIndex}
        />
      ))}
    </div>
  );
};

export default RMenu;
