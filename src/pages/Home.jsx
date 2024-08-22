import { HOME_BG_URL } from "../utils/constants";
import Login from "../components/Login";

function Home() {

  return (
    <>
      <div>
        <div className="flex h-screen relative overflow-hidden bg-gradient-to-t bg-black">
           <div className="absolute inset-0">
                <img className="object-cover object-center w-full h-full bg-transparent opacity-30" src={HOME_BG_URL}/>
            </div>
            <div className="relative z-10 flex justify-center items-center h-full bg-transparent w-full">
            <Login/>
            </div>
           
        </div>
        </div>
    </>
      
  )
}

export default Home;


/*Atomatic signIn */
// useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {    //firebase utility
//       if (user) {
//         // User is signed in
//         console.log("in")
//         const {uid, email, displayName} = user;
//         dispatch(createUser({uid:uid,email:email, displayName:displayName}));
//         navigate("/browse"); // if the user is signed in redirect to browse page     
//       } else {
//         // User is signed out
//         dispatch(deleteUser());
//         navigate("/");
//       }
//     });
//   },[])
