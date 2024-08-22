import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {deleteUser} from '../utils/userSlice';

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store) => store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(deleteUser());
            navigate("/")
          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <header>
            <div className="absolute z-50 w-full p-2">
                <div className="flex justify-between">
                <img className="w-24 md:w-40" src="
    https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>  
                {user && (
                <div className="flex">
                    <div>
                        <ul className="flex">
                            <li className="text-white mr-4">Home</li>
                            <li className="text-white mr-4">Movies</li>
                            <li className="text-white mr-4">My List</li>
                        </ul>
                    </div>
                
                    <div className="">
                        <ul className="flex">
                            <li className="text-white mr-4">Search</li>
                            <li className="text-white mr-4">{user?.displayName}</li>   
                            {/* <li className="text-white">Avator</li> */}
                            <li className="text-white">
                            <button onClick={handleSignOut} className="transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-4 rounded  text-white mb-8">Sign Out</button></li>
                        </ul>
                    </div>
                </div>
                 )}
                </div>
            </div>
        </header>
        
    )
}

export default Header;