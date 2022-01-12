import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import backButton from '../../../Icons/chevron-back-outline.svg'
import Data from "./Data";
export default function List() {
    const { category } = useParams()
    // const location = useLocation()
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex w-full justify-between items-center px-5">
                <div>
                    <Link to="#" onClick={(e) => {e.preventDefault();navigate(-1)}}>
                        <img src={backButton} alt="..." width={24}/>
                    </Link>
                </div>
                <h1 className="font-bold text-xl uppercase">
                    {category}
                </h1>
            </div>
            <br />
            <Data category={category} />
        </div>
    )
}