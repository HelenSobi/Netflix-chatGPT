import { Provider } from 'react-redux';
import appStore from './utils/appStore.jsx';
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx';

function App() {

  return (
    <>
      <Header/>
      <Home/>
    </>  
  )
}

export default App;
