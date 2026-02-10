import { RCARD_DESIGN } from '../../utils/Constants';
import { NavLink } from 'react-router';

const RCard = ({ id, name, locality, cuisines, avgRating, veg }) => {
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-300">
      <img className="rounded-lg" src={RCARD_DESIGN} alt={name} />

      <NavLink to={`/restaurants/${id}`}>
        <h2 className="underline p-2">{name}</h2>
      </NavLink>

      <h3 className="p-2">{locality}</h3>
      <h3 className="p-2">{cuisines.join(', ')}</h3>
      <h3 className="p-2">{avgRating}</h3>
    </div>
  );
};

export const ResVegCard = (WrappedCard) => {
  return function VegRestaurantCard(props) {
    return (
      <div className="relative">
        <span className="absolute top-0 left-0 bg-green-600 text-white text-xs px-2 py-1 rounded">
          Veg
        </span>

        {/* render wrapped card with all props */}
        <WrappedCard {...props} />
      </div>
    );
  };
};

export default RCard;
