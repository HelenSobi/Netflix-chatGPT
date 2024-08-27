import { signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation , Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { auth } from '../utils/firebase'
import { createUser,deleteUser } from "../store/userSlice";
import Modal from './Modal.jsx';

const NavBarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location = useLocation();
  const user=useSelector((store) => store.user);
   const isMoviesPage = location.pathname === '/movies';    // Check if the current path is '/movies'
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {    //firebase utility
        if (user) {    // User is signed in
            const {uid, email, displayName} = user;
            dispatch(createUser({uid:uid,email:email, displayName:displayName}));    
        } else {
            dispatch(deleteUser());
            navigate("/");
        }});
        return ()=>unsubscribe();   //remove `onAuthStateChanged` when component unmounts
    },[])
    const handleSignOut=()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            console.log(error)
          });
    }
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    
      <header className={`absolute z-50 w-full ${isMoviesPage ? "bg-black" : "bg-transparent"}`}>
        <nav className={`flex flex-wrap items-center justify-between p-3 ${isOpen && "bg-black"}`}>
          <Link to="/home" className="flex items-center">
            <img src="./logo.png" className="w-48 md:w-60" alt="Logo" />
          </Link>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex px-3 py-2 rounded text-white">
              <svg
                className={`fill-white h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-white h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? "block" : "hidden" } w-full block md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none`}>
          <Link onClick={() => setIsOpen(!isOpen)}
              to="/home" className="block text-white text-xl  md:inline-block hover:text-red-700 px-3 py-3 md:border-none">Home
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)}
              to="/movies"
              className="block text-white text-xl  md:inline-block hover:text-red-700 px-3 py-3 md:border-none"> Movies
            </Link>
           </div>
           <div className={`${isOpen ? "block" : "hidden" } w-full md:w-auto md:flex text-right text-bold md:mt-0 md:border-none`}>
          {user ? ( <>
          <div>
            <div className="block text-white md:inline-block px-3 py-3 md:border-none">
              Hello, {user?.displayName}
            </div>
            <Link onClick={handleSignOut} to="/" className="block text-white md:inline-block hover:text-red-700 px-3 py-3 md:border-none">
              Signout
            </Link>
          </div>
          </>) : 
          (<button onClick={openModal} className=" inline-block  px-6 md:px-12 py-3 text-xl font-medium text-red-600 shadow hover:text-red-700  active:bg-red-500 sm:w-auto">Login</button> )
        }     
            { isModalOpen ? <Modal onClose={closeModal} /> : null } 
            </div>
        </nav>
      </header>
   
  );
};

export default NavBarHeader;
