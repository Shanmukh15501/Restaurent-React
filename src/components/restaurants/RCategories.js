import RCItems from "./RCategoryItemsList";

const RestaurantItemCategories = ({
  index,
  category,
  items,
  isOpen,
  setOpenCategoryIndex,
}) => {

  function toggleAccordion() {
    if (isOpen) {
      setOpenCategoryIndex(null);
    } else {
      setOpenCategoryIndex(index);
    }
  }

  return (
    <>
      <div
        onClick={toggleAccordion}
        className="flex justify-between w-4/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer hover:bg-gray-100 transition"
      >
        <span className="font-bold text-lg">
          {category} ({items?.length ?? 0})
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && <RCItems items={items} />}
    </>
  );
};

export default RestaurantItemCategories;
