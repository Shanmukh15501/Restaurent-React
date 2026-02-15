import './styles/App.css';
import Header from './components/common/Header.js';
import { Outlet } from 'react-router';
import Offline from './components/common/Offline.js';
import { useInternet } from './hooks/useInternet.js';
import UserContext from "./components/common/UserContext.js"; // no .js needed

function App() {
  const { active } = useInternet();

  if (!active) {
    return <Offline />;
  }

  return (
    <div className="app">

    <UserContext.Provider value={{ loggedInUser: "Aparna" }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
    
    </div>
  );
}

export default App;
