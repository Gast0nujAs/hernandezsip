import { Navbar } from "./Navbar";

export const Header = () => {
    return ( 
        <div className="flex place-content-between items-center px-10  h-[100px]  bg-[#006BA6]">
            <h1 className="md:text-4xl md:px-10 sm:px-2 font-Anton text-white sm:text-xl">Hernandez SIP</h1>
            <Navbar />
        </div>
    )
};