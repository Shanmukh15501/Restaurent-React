import './styles/App.css';
import Header from './components/common/Header.js';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
