import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>Menu</h1>
      <Link to='/'>Home</Link>
      <Link to='/sobre'>Sobre</Link>
      <Outlet />
    </div>
  );
}

export default App;
