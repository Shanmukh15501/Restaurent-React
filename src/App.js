import './styles/App.css';
import Header from './components/common/Header.js';
import { Outlet } from 'react-router';
import Offline from './components/common/Offline.js';
import { useInternet } from './hooks/useInternet.js';
import UserContext from "./components/common/UserContext.js"; // no .js needed
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

function App() {
  const { active } = useInternet();

  if (!active) {
    return <Offline />;
  }

  return (
    <Provider store={appStore}>
    <div className="app">
    <UserContext.Provider value={{ loggedInUser: "Shanmukh" }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
    
    </div>
    </Provider>
  );
}

export default App;
