
import { ITEM_PIC } from '../../utils/Constants';

const RCItems = ({ items }) => {
  const data = items ?? [];

  const itemList = data.map((item, index) => {
    const id = item?.card?.info?.id ?? index;

    return (
      <div
        className="p-2 m-2 text-left border-b-2 border-solid"
        key={id}
      >
        <img className="w-auto h-25" src={ITEM_PIC}></img>

        <p>
          {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
        </p>
        <p>{item?.card?.info?.description}</p>
      </div>
    );
  });

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {itemList}
    </div>
  );
};

export default RCItems;
