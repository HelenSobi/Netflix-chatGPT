import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import {formValidate} from '../utils/validate';
import {createUser} from '../store/userSlice';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState("");
    const fname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
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
        <h1 className="text-2xl md:text-4xl text-white mb-6">{isLogin ? "Sign In" : "Sign Up"}</h1>
        {!isLogin && <input type="text" ref={fname} placeholder="Full Name" className="placeholder-gray-500 rounded text-white bg-transparent border-[1px] border-zinc-700 focus:border-slate-500 focus:ring-0 focus:outline-none p-4 mb-8"/>}
        <input type="text" ref={email} placeholder="Email Address" className="placeholder-gray-500 rounded text-white bg-transparent border-[1px] border-zinc-700 focus:border-slate-500 focus:ring-0 focus:outline-none p-4 mb-8"/>
        <input type="password" ref={password} placeholder="Password" className="placeholder-gray-500 rounded text-white bg-transparent border-[1px] border-zinc-700  focus:border-slate-500 focus:ring-0 focus:outline-none p-4 mb-8"/>
        <p className="text-red-700 text-sm mb-4">{isError}</p>
        <button onClick={handleClick} className="transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-4 rounded  text-white mb-8">{isLogin ? "Sign In" : "Sign Up"}</button>
        <p className="text-stone-300 cursor-pointer" onClick={toggleForm}>
        {isLogin ? "New to Netflix? Sign Up" : "Already registered? Sign In Now"}</p>
       </div>
       
       </form>
        </div>
      
        </>
    )
}

export default Login;