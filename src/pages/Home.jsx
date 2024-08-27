import NavBarHeader from '../components/NavBarHeader';
import Login from "../components/Login";
import {HOME_BG_URL} from "../constants/constants_img";

function Home() {

  return ( 
    <main>
    
       <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${HOME_BG_URL}`} className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <Login/>
        </div>
      </div>
    </main>   
  )
}

export default Home;


