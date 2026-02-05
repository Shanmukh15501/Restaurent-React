This folder contains restaurant-related components:

- `RestaurantContainer.js` - page-level container using `useRestaurants` hook
- `RestaurantCard.js` - individual restaurant card component

The container imports `useRestaurants()` from `src/hooks/useRestaurants.js` which returns:
- `allRestaurants`: full fetched list
- `filteredRestaurants`: current view list
- `setFilteredRestaurants`: setter for filtered list
- `loading`: boolean for fetch state

Prefer destructuring the hook return into a named variable for readability:

```javascript
const restaurantsState = useRestaurants();
const {
  allRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
  loading,
} = restaurantsState;
```
