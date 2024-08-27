import { Link } from "react-router-dom";
import { LOGO} from "../constants/constants_img.jsx";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { createUser,deleteUser } from "../store/userSlice";

const NavBarHeader = ({background = null}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store) => store.user);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {    //firebase utility
        if (user) {
            // User is signed in
            const {uid, email, displayName} = user;
            dispatch(createUser({uid:uid,email:email, displayName:displayName}));
            //navigate("/browse"); // if the user is signed in redirect to browse page     
        } else {
            dispatch(deleteUser());
            navigate("/");
        }
        });
        return ()=>unsubscribe();   //remove `onAuthStateChanged` when component unmounts
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            console.log(error)
          });
    }
  return (
    
      <header className={`absolute z-50 w-full ${background} ${isOpen && "bg-black"}`}>
        <nav className="flex flex-wrap items-center justify-between p-3">
          <Link to="/home" className="flex items-center">
            <img src={LOGO} className="w-24 md:w-40" alt="Netflix Logo" />
          </Link>
          <Link to="/login" className="inline-block rounded bg-red-600 px-6 md:px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
            LOGIN
          </Link>
          <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/home"
              className="block text-white  md:inline-block hover:text-red-700 px-3 py-3 md:border-none"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/movies"
              className="block text-white md:inline-block hover:text-red-700 px-3 py-3 md:border-none"
            >
              Movies
            </Link>
          {user && ( <>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex px-3 py-2 rounded text-white"
            >
              <svg
                className={`fill-white h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-white h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full block md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none`}
          >
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/browse"
              className="block text-white  md:inline-block hover:text-red-700 px-3 py-3 md:border-none"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/movies"
              className="block text-white md:inline-block hover:text-red-700 px-3 py-3 md:border-none"
            >
              Movies
            </Link>
            
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:w-auto md:flex text-right text-bold md:mt-0 md:border-none`}
          >
            <div className="block text-white md:inline-block px-3 py-3 md:border-none">
              Hello, {user?.displayName}
            </div>
            <Link onClick={handleSignOut}
              to="/"
              className="block text-white md:inline-block hover:text-red-700 px-3 py-3 md:border-none"
            >
              Log Out
            </Link>
          </div>
          </>)}
        </nav>
      </header>
   
  );
};

export default NavBarHeader;
