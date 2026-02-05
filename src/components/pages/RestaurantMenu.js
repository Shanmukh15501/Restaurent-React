import { useParams } from 'react-router';
import { useRestaurantMenu } from '../../hooks/useRestaurantMenu.js';
import ShimmerUI from '../common/ShimmerUI.js';

const RMenu = () => {
  const { rid } = useParams();
  const { restaurantInfo, menuItems, loading } = useRestaurantMenu(rid);

  if (loading || restaurantInfo === null) {
    return <ShimmerUI />;
  }

  return (
    <div className="RMenu-class">
      <h2>Name - {restaurantInfo.name}</h2>
      <h2>Locality - {restaurantInfo.locality}</h2>
      <hr />

      {menuItems.map((menu, index) => (
        <div key={menu?.title || index}>
          <h2>Category - {menu.title}</h2>
          <hr />
          {menu?.itemCards?.map((item) => (
            <p key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {item?.card?.info?.price / 100}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RMenu;
