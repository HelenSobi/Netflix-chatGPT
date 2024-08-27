import { useState, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {formValidate} from '../utils/validate';
import {createUser} from '../store/userSlice';
import { useNavigate } from "react-router-dom";

const Modal = ({onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState("");
  const [bgNoScroll, setBgNoScroll] = useState("");
  const fname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm=()=>{
      setIsLogin(!isLogin);
  }

  const handleClick=(e)=>{
      e.preventDefault();
      const validateMsg=formValidate(email.current.value,password.current.value);
      setIsError(validateMsg);
      if(validateMsg) return ;
      if(!isLogin){
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(auth.currentUser, {
                  displayName: fname.current.value
                }).then(() => {
                  const {uid, email, displayName} = auth.currentUser;
                  dispatch(createUser({uid:uid,email:email, displayName:displayName})); 
                  navigate("/movies");
                  onClose();
                }).catch((error) => {
                  console.log(error);
                });
          })
          .catch((error) => {
              const errorMessage = error.message;
              setIsError(errorMessage);
          });
      } else{
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
              const user = userCredential.user;
              navigate("/movies");
              onClose();
          })
          .catch((error) => {
              const errorMessage = error.message;
              setIsError(errorMessage);
          });
      }

  }
  
  useEffect(()=>{
    document.body.classList.add("overflow-hidden");
    return ()=>{
      document.body.classList.remove("overflow-hidden");
    }

  },[]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div className="fixed inset-0 bg-zinc-900 opacity-40"></div>
      <div className="rounded-lg shadow-lg z-10 "> 
      <div className="w-full md:w-[400px]">
      <form>
        <div className="flex flex-col bg-black p-6">
        <div className="flex items-center justify-between rounded-t dark:border-gray-600">
       <button type="button" onClick={onClose}
        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                   <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                   </svg>
                   <span className="sr-only">Close modal</span>
               </button>
       </div>
        <h1 className="text-left text-xl md:text-2xl text-white mb-6">{isLogin ? "Welcome Back! " : "Create an Account"}</h1>
        {!isLogin && <input type="text" ref={fname} placeholder="Name" className="placeholder-gray-500 rounded text-white bg-transparent border-[1px] border-zinc-700 focus:border-slate-500 focus:ring-0 focus:outline-none p-4 mb-8"/>}
        <input type="text" ref={email} placeholder="name@email.com" className="placeholder-gray-500 rounded text-white bg-transparent border-[1px] border-zinc-700 focus:border-slate-500 focus:ring-0 focus:outline-none p-4 mb-8"/>
        <input type="password" ref={password} placeholder="Password" className="placeholder-gray-500 rounded text-white bg-transparent border-[1px] border-zinc-700  focus:border-slate-500 focus:ring-0 focus:outline-none p-4 mb-8"/>
        <p className="text-red-700 text-sm mb-4">{isError}</p>
        <button onClick={handleClick} className="transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-4 rounded  text-white mb-8">{isLogin ? "Login" : "Register"}</button>
        <p className="text-stone-300 cursor-pointer text-left" onClick={toggleForm}>
        {isLogin ? (
        <>
        Don't have an account? <span className='text-red-700'>Register</span>
        </> ) : (
        <>Have an account? <span className='text-red-700'>Login</span>
         </> )}
         </p>
       </div>
       </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
