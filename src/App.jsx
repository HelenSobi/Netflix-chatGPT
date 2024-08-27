import { Outlet }from 'react-router-dom';
import NavBarHeader from './components/NavBarHeader';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBarHeader/>
    <Outlet/>
    <Footer/>
    </>  
  )
}

export default App;
