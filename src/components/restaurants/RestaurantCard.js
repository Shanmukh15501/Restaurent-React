import { RCARD_DESIGN } from '../../utils/Constants';
import { NavLink } from 'react-router';

const RCard = ({ id, name, locality, cuisines, avgRating }) => {
  return (
    <div className="res-card" style={{ backgroundColor: 'grey' }}>
      <img src={RCARD_DESIGN} alt={name} />

      <NavLink to={`/restaurants/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <h3>{locality}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RCard;
