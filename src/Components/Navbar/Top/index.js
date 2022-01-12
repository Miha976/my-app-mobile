import { useContext } from "react";
import { Contexts } from "../../Context";

export default function Top() {
    const { menu, toggleMenu } = useContext(Contexts)
    return(
        <div className="flex items-center justify-between w-full bg-white py-4 px-2" id="navbar-top">
            <div className="flex items-center text-lg">
                <div className="mr-1 text-sm transform scale-[1.2]">
                    <img src="https://www.pngrepo.com/download/133427/seahorse.png" alt="seahorse" width={20} />
                </div>
                <div className="flex">
                    <p className="text-blue-700">My</p>
                   <p className="text-red-700">Recipes</p>
                </div>
            </div>
            <div className="text-xl cursor-pointer mr-2" onClick={() => toggleMenu()}>
                <i className={`fas fa-${menu ? 'times' : 'bars'}`}></i>
            </div>
        </div>
    )
}