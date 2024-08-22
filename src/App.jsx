import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser,deleteUser } from "./utils/userSlice.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.jsx";
import Header from "./pages/Header";
import Home from "./components/Home";

function App() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid, email, displayName} = user;
        //console.log("sign/signout"+user)
        dispatch(createUser({uid:uid,email:email, displayName:displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(deleteUser());
        navigate("/");
      }
    });
  },[])
  return (
    <>
      <Header/>
      <Home/>
    </>
      
  )
}

export default App;
