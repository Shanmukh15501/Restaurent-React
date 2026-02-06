import './styles/App.css';
import Header from './components/common/Header.js';
import { Outlet } from 'react-router';
import Offline from './components/common/Offline.js';
import { useInternet } from './hooks/useInternet.js';

function App() {
  const { active } = useInternet();
  if (!active) {
    return <Offline/>
  }
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
