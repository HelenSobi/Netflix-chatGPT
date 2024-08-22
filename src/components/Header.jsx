import { signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { createUser,deleteUser } from "../utils/userSlice.jsx";
import { LOGO } from "../utils/constants.jsx";

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store) => store.user);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {    //firebase utility
        if (user) {
            // User is signed in
            //console.log("in")
            const {uid, email, displayName} = user;
            dispatch(createUser({uid:uid,email:email, displayName:displayName}));
            navigate("/browse"); // if the user is signed in redirect to browse page     
        } else {
            // User is signed out
            dispatch(deleteUser());
            navigate("/");
        }
        });
        return ()=>unsubscribe();
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <header>
            <div className="absolute z-50 w-full p-2">
                <div className="flex justify-between">
                <img className="w-24 md:w-40" src={LOGO}/>  
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