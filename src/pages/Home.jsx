import NavBarHeader from '../components/NavBarHeader';
import Login from "../components/Login";

function Home() {

  return ( 
    <main>
       <NavBarHeader/>
       <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/36c66c02-cf19-40d2-ba6c-789712478afd/AE-en-20240819-TRIFECTA-perspective_WEB_30ca3a23-6077-4a0a-be1b-774dd793229e_small.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
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


