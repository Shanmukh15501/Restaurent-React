import { useState } from "react";
import RCItems from "./RCategoryItemsList";
const RestaurantItemCategories = ({ id, category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <span className="font-bold text-lg">
          {category}({items.length})
        </span>
        <span>▼</span>
      </div>
      <RCItems items={items}></RCItems>
    </>
  );
};

export default RestaurantItemCategories;
