import Header from "../components/Header";
import { HOME_BG_URL} from "../utils/constants";
const Browse = () => {

    return (
        <>
        <Header/>
        <div>
        <div className="flex h-screen relative overflow-hidden bg-gradient-to-t bg-black">
           <div className="absolute inset-0">
                <img className="object-cover object-center w-full h-full bg-transparent opacity-30" src={HOME_BG_URL}/>
            </div>

            <div className="relative z-10 flex justify-center items-center h-full bg-transparent w-full">
            </div>
           
        </div>
        </div>
        </>
    )
}

export default Browse;