
import Login from "./Login"
const Home = () => {
    return (
        <div>
        <div className="flex h-screen relative overflow-hidden bg-gradient-to-t bg-black">
           <div className="absolute inset-0">
                <img className="object-cover object-center w-full h-full bg-transparent opacity-30" src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/36c66c02-cf19-40d2-ba6c-789712478afd/AE-en-20240819-TRIFECTA-perspective_WEB_30ca3a23-6077-4a0a-be1b-774dd793229e_small.jpg"/>
            </div>
            <div className="relative z-10 flex justify-center items-center h-full bg-transparent w-full">
            <Login/>
            </div>
           
        </div>
        </div>
    )
}

export default Home;