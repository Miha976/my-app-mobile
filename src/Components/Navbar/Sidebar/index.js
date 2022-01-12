import { onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase/auth";
import PopUp, { OpenPopUp } from "../../Popups";
import home from '../../../Icons/home.svg'
import search from '../../../Icons/search.svg'
import userIcon from '../../../Icons/log-in.svg'
import gift from '../../../Icons/gift.svg'
import grid from '../../../Icons/grid.svg'
import settings from '../../../Icons/settings.svg'
import contact from '../../../Icons/phone.svg'
import help from '../../../Icons/help-circle-outline.svg'
import about from '../../../Icons/information-circle-outline.svg'
import duplicateOutline from '../../../Icons/duplicate-outline.svg'
import shoppingCart from '../../../Icons/shopping-cart.svg'
import { Contexts } from '../../Context/index'
export default function Sidebar() {
    const { menu, toggleMenu } = useContext(Contexts)
    let [user, setUser] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    let links = [
        {
            text: 'Accueil',
            icon: home,
            target: '/'
        },
        {
            text: 'Boutique',
            icon: grid,
            target: '/shop'
        },
        {
            text: 'Nouveautés',
            icon: duplicateOutline,
            target: '/shop/news'
        },
        {
            text: 'Cadeaux',
            icon: gift,
            target: '/shop/gifts'
        },
        {
            text: 'Panier',
            icon: shoppingCart,
            target: '/cart'
        },
        {
            text: 'Paramètres',
            icon: settings,
            target: '/settings'
        },
        {
            text: 'Contact',
            icon: contact,
            target: '/contact'
        },
        {
            text: 'Aide',
            icon: help,
            target: '/help'
        },
        {
            text: 'A propos',
            icon: about,
            target: '/about'
        }
    ]
    return(
        <div className={`fixed w-2/3 h-full top-0 left-0 ${!menu && '-left-full'} z-30 bg-white flex flex-col overflow-y-scroll shadow-red-700 shadow-2xl duration-300`} id="sidebar">
            <div className="flex justify-start items-center relative bg-gray-100/50 border border-gray-300 rounded-md py-3 mt-5 mx-4 mb-10" onClick={() => OpenPopUp('search')}>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <img src={search} alt="..." />
                </div>
                <p className="ml-10 text-gray-400">
                    Rechercher
                </p>
            </div>
            <PopUp name={"search"} />
            {links.map((link, index) => 
            <Link key={index} to={link.target} className="flex justify-start items-center relative duration-500 hover:bg-gray-100/50 rounded-md py-3 mx-4 mb-6">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <img src={link.icon} alt="..." width={24}/>
                </div>
                <p className="ml-10 text-gray-700">
                    {link.text}
                </p>
            </Link>
            )}
            <div className="flex justify-start items-center sticky left-0 w-full bottom-0 bg-gray-100/50 backdrop-blur-[1px] py-4 px-2">
                <div>
                    <img src={userIcon} alt="..." width={24} />
                </div>
                <div className="ml-5 text-lg">
                    <Link to="/login">
                        Se connecter
                    </Link>
                </div>
            </div>
        </div>
    )
}