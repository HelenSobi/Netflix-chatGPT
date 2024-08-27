import { Outlet }from 'react-router-dom';
import NavBarHeader from './components/NavBarHeader';
import Home from './pages/Home';

function App() {
  return (
    <>
    <NavBarHeader/>
    <Outlet/>
    </>  
  )
}

export default App;
