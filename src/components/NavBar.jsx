import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const navigate=useNavigate();
    const user=useSelector((store) => store.user);
    //console.log(user);
    const handleSignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }
   
    return (
        <nav>
            <div className="absolute z-50 w-full p-2">
                <div className="flex justify-between">
                <img className="w-24 md:w-40" src="
    https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>  
                <div>
                    <ul className="flex flex-wrap">
                        <li className="text-white mr-4">Home</li>
                        <li className="text-white mr-4">Movies</li>
                        <li className="text-white mr-4">My List</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-wrap">
                        <li className="text-white mr-4">Search</li>
                        <li className="text-white mr-4">{user?.displayName}</li>   
                        {/* <li className="text-white">Avator</li> */}
                        <li className="text-white">
                        <button onClick={handleSignout} className="transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-4 rounded  text-white mb-8">Sign Out</button></li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
        
    )
}
    
export default NavBar;