import { signOut,onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { createUser,deleteUser } from "../store/userSlice.jsx";
import { LOGO } from "../constants/constants_img.jsx";


const Header = () => {
    const [isOpen, setIsOpen]=useState(false)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((store) => store.user);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {    //firebase utility
        if (user) {
            // User is signed in
            const {uid, email, displayName} = user;
            dispatch(createUser({uid:uid,email:email, displayName:displayName}));
            navigate("/browse"); // if the user is signed in redirect to browse page     
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
        <>
        <header>
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={LOGO} className="mr-3 w-24 md:w-40" alt="Netflix Logo" />
                    </Link>
                    {user && (
                        <>
                    <div className="flex items-center lg:order-2">
                        <Link className="text-zinc-200 dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">{user?.displayName}</Link>
                        <Link to="/" onClick={handleSignOut} className="text-zinc-200 dark:text-white hover:bg-red-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700">Sign Out</Link>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-zinc-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Movies</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-zinc-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">My List</Link>
                            </li>
                            
                        </ul>
                    </div>
                    </>
                    )}
                </div>
            </nav>
        </header>
        {/* <header className="bg-black w-full">
            <div className="flex flex-wrap justify-between p-4 ">
                    <div>
                        <Link to="/"><img className="w-24 md:w-40" src={LOGO}/> </Link>
                    </div>
                    {!user && (
                    <div className="flex flex-wrap justify-between">
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
                    <div
                        className={`w-full max-md:h-screen flex flex-col justify-center md:block md:flex-row items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
                      
                            <Link to="/" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:bg-red-900">Home</Link>
                            <Link to="/" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:bg-red-900">Movies</Link>
            
                            <Link to="/" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:bg-red-900">My List</Link>
                            
                            <Link to="/" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:bg-red-900" >{user?.displayName}</Link> 
                            <Link to="/" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:bg-red-900" >Avator</Link>   
                      
                        <Link onClick={handleSignOut} className="mt-4 transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-4 rounded  text-white">Signout</Link>
                    </div> 
                    </div> 
                    )}
            </div>
        </header> */}
        </>
        // <header>
        //     <div className="absolute z-50 w-full p-2">
        //         <div className="flex justify-between">
        //         <img className="w-24 md:w-40" src={LOGO}/>  
        //         {user && (
        //         <div className="flex">
        //             <div>
        //                 <ul className="flex">
        //                     <li className="text-white mr-4">Home</li>
        //                     <li className="text-white mr-4">Movies</li>
        //                     <li className="text-white mr-4">My List</li>
        //                 </ul>
        //             </div>
                
        //             <div className="">
        //                 <ul className="flex">
        //                     <li className="text-white mr-4">Search</li>
        //                     <li className="text-white mr-4">{user?.displayName}</li>   
        //                     {/* <li className="text-white">Avator</li> */}
        //                     <li className="text-white">
        //                     <button onClick={handleSignOut} className="transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-4 rounded  text-white mb-8">Sign Out</button></li>
        //                 </ul>
        //             </div>
        //         </div>
        //          )}
        //         </div>
        //     </div>
        // </header>
        
    )
}

export default Header;