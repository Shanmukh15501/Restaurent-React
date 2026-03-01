import { useSelector, useDispatch } from "react-redux";
import { clearCartItem } from '../../utils/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);

  function handleClearCart() {
    dispatch(clearCartItem());
  }

  return (
    <div className="w-4/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Cart</h2>

        <button 
          onClick={handleClearCart}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <h1>Please add items. Cart is empty.</h1>
      ) : (
        <p>Total Items: {cartItems.length}</p>
      )}

    </div>
  );
};

export default Cart;