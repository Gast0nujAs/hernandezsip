import { Navbar } from "./Navbar";

export const Header = () => {
    return ( 
        <div className="flex place-content-between items-center px-10  h-[100px]  bg-[#006BA6]">
            <h1 className="text-4xl px-10 font-Anton text-white ">Hernandez SIP</h1>
            <Navbar />
        </div>
    )
};