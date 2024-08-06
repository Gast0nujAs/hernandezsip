import { Navbar } from "./Navbar";
import logoJCH from "../assets/img/logoJCH.png";

export const Header = () => {
    return ( 
        <div className="flex place-content-between items-center md:px-10 sm:px-2 h-[100px] w-full bg-[#006BA6]">
            <img src={logoJCH} alt="logoJCH" className="h-[100px] w-[200px] sm:mb-2 sm:mt-2"/>
            <Navbar />
        </div>
    )
};