import { Link, useLocation } from 'react-router-dom'
import mealIcon from '../../../Icons/meal.svg'
import DessertIcon from '../../../Icons/beer-outline.svg'
import OthersIcon from '../../../Icons/pizza-outline.svg'
import { useEffect } from 'react'
import Header from '../Header'
export default function Home() {
    let categories = [
        {
            text: 'Plats',
            icon: mealIcon,
            target: '/plats'
        },
        {
            text: 'Desserts',
            icon: DessertIcon,
            target: '/desserts'
        },
        {
            text: 'Autres',
            icon: OthersIcon,
            target: '/autres'
        },
        {
            text: 'Plats',
            icon: mealIcon,
            target: '/plats'
        },
        {
            text: 'Desserts',
            icon: DessertIcon,
            target: '/desserts'
        },
        {
            text: 'Autres',
            icon: OthersIcon,
            target: '/autres'
        },
    ]
    let path = "/shop"
    return(
        <div className="flex justify-center w-full flex-wrap p-5">
            <Header />
            <div className="flex justify-center w-full flex-wrap">
            {categories.map((category, index) => 
            <Link to={`${path}${category.target}`} key={index} className="bg-gray-200 py-4 px-6 m-4">
                <div>
                    <img src={category.icon} alt="..." width={60}/>
                </div>
                <div className="font-bold text-blue-500 my-1">
                    <p>
                        {category.text}
                    </p>
                </div>
            </Link>
            )}
            </div>
        </div>
    )
}