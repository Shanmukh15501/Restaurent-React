
import { ITEM_PIC } from '../../utils/Constants';

const RCItems = ({ items, onAdd }) => {
  const data = items ?? [];

  const itemList = data.map((item, index) => {
    const id = item?.card?.info?.id ?? index;
    const info = item?.card?.info;

    return (
      <div key={id} className="flex justify-between items-center border-b-2 border-solid">
        
        <div className="p-2 m-2 text-left ">
          <p>
            {info?.name} - ₹{info?.price / 100}
          </p>
          <br/>
          <p>{info?.description}</p>
        </div>

          <div className="relative">
            <img
            className="w-24 h-24 object-cover cursor-pointer hover:opacity-80"
            src={ITEM_PIC}
            alt={info?.name}
            onClick={() => onAdd(info)}
          />
            <button
                onClick={() => {console.log("hi");}}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 
                          bg-white text-green-600 font-bold px-4 py-1 
                          shadow-md rounded-md border"
              >
                ADD
              </button>
        </div>


      </div>
    );
  });

  return (
    <div className="w-4/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {itemList}
    </div>
  );
};


export default RCItems;
