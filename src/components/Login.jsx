import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import {formValidate} from '../utils/validate';
import {createUser} from '../store/userSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState("");
    const fname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const navigate=useNavigate();
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
                    navigate("/home");
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
                navigate("/home");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setIsError(errorMessage);
            });
        }

    }
    return (
        <>
        <div className="w-full sm:w-6/12 md:w-5/12 lg:w-4/12">
        <form>
        <div className="flex flex-col bg-black bg-opacity-50 p-12">
        <h1 className="text-left text-2xl md:text-4xl text-white mb-6">{isLogin ? "Welcome Back! " : "Create an Account"}</h1>
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
      
        </>
    )
}

export default Login;