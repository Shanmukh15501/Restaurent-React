import { useParams } from 'react-router';
import { useRestaurantMenu } from '../../hooks/useRestaurantMenu.js';
import ShimmerUI from '../common/ShimmerUI.js';

const RMenu = () => {
  const { rid } = useParams();
  const menuState = useRestaurantMenu(rid);
  const { restaurantInfo, menuItems, loading, error } = menuState;

  if (loading) {
    return <ShimmerUI />;
  }

  // ❌ Show error if API fails
  if (error) {
    return (
      <div
        style={{
          padding: '20px',
          margin: '20px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          color: '#721c24',
          borderRadius: '4px',
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
          padding: '20px',
          margin: '20px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeeba',
          color: '#856404',
          borderRadius: '4px',
        }}
      >
        <h3>Restaurant not found</h3>
        <p>Please try selecting another restaurant.</p>
      </div>
    );
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
