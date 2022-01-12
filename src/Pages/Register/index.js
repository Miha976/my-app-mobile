import '../../Components/Firebase/index'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import auth from '../../Components/Firebase/auth'
export default function Register() {
    let [user, setUser] = useState(null)
    function handleSubmit(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
        .then(userCredential => {
            const user = userCredential.user
            console.log(user)
        })
        .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
    }
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    useEffect(() => {
        document.title = "Inscription"
    }, [])
    if(user) {
        return(
            <div>
                <h1 className="text-black">
                    Connecté en tant que {user.displayName}
                    <br />
                </h1>
            </div>
        )
    }
    return(
        <div className="flex justify-center items-center">
            <div className="text-black bg-white p-6 rounded-md">
                <form action="" onSubmit={handleSubmit}>
                    {/* <div className="my-4">
                        <input type="text" placeholder="Nom" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="my-4">
                        <input type="text" placeholder="Prénom" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>                     */}
                    <div className="my-4">
                        <input type="email" placeholder="Email" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="my-4">
                        <input type="password" placeholder="Mot de passe" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="my-4">
                        <input type="password" placeholder="Confirmation du mot de passe" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div>
                        <button type="submit" className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white my-2 w-80 rounded-md">S'inscrire</button>
                    </div>
                    <div className="space-x-1">
                        <button className="py-3 px-6 bg-white hover:bg-gray-200 my-2 w-44 rounded-md">
                            <i className="fab fa-google mr-1"></i>
                            Google
                        </button>
                        <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white my-2 w-44 rounded-md">
                            <i className="fab fa-facebook-square mr-1"></i>
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}