import { useEffect, useState } from "react"
import { getDatabase, onValue, ref } from 'firebase/database'
import app from "../../../../Components/Firebase"
// import db from '../../../../Components/Firebase/db'
export default function Data({category}) {
    let [data, setData] = useState([])
    useEffect(() => {
        const db = getDatabase()
        let products = ref(db, 'products/')
        onValue(products, function(snapshot) {
            setData(snapshot.val())
        })
    }, [])
    useEffect(() => {
        console.log(data)
    }, [data])
    return(
        <div className="flex w-full p-5 flex-wrap">
            {data ? data !== "" ? (
                <div className="m-5">
                    {Object.keys(data).map((product, index) => <ul key={index} className="list-disc flex space-x-10 my-2">
                        <p>N° {index}</p>
                        <li>Nom: {data[product].name}</li>
                        <li>Prix: {data[product].price}€</li>
                    </ul>)}
                </div>
            ):<h1>Chargement...</h1>:<p>Aucune donnée</p>}
        </div>
    )
}