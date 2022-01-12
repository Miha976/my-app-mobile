import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from 'react';
import auth from "../../Components/Firebase/auth"

export default function Login() {
    let [user, setUser] = useState(null)
    let [submitText, setSubmitText] = useState("Se connecter")
    let [message, setMessage] = useState(null)
    function handleSubmit(e) {
        if(message) {
            setMessage(null)
        }
        setSubmitText(<i className="fas fa-circle-notch fa-spin"></i>)
        e.preventDefault()
        signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
          .then((userCredential) => {
            // Signed in 
            setMessage("Connecté")
            setSubmitText("Se connecter")
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            setSubmitText("Se connecter")
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/user-not-found") {
                setMessage("Email introuvable")
            }
            if(errorCode === "auth/wrong-password") {
                setMessage("Mot de passe incorrect")
            }
            console.log("Code: " + errorCode, "Message: " + errorMessage)
          });
    }
    function GoogleSumbit() {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log("Credential", credential)
            console.log("Token", token)
            console.log("User", user)
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorCode)
            console.log("Message", errorMessage)
            console.log("Email", email)
            console.log("Credential", credential)
        })
    }
    function FacebookSumbit() {
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log("Credential", credential)
            console.log("Token", token)
            console.log("User", user)
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log("Code", errorCode)
            console.log("Message", errorMessage)
            console.log("Email", email)
            console.log("Credential", credential)
        })
    }
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    if(user) {
        // if(user.email) {
            return(
                <div>
                    <h1 className="text-black">
                        {user.email}
                    </h1>
                    <br />
                    <button onClick={() => {signOut(auth);window.location.reload()}} className="text-blue-500">
                        Déconnexion
                    </button>
                </div>
            )
        // }
    }
    return(
        <div className="text-black">
            <form action="" onSubmit={handleSubmit}>
                <div className="my-4">
                    <input type="email" placeholder="Email" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-80 rounded-md" required/>
                </div>
                <div className="my-4">
                    <input type="password" placeholder="Mot de passe" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-80 rounded-md" required/>
                </div>
                <div>
                    <a href="#" className="text-gray-500 hover:text-gray-800">Mot de passe oublié ?</a>
                </div>
                <div className="text-lg text-blue-700 font-bold">
                    <p>
                        {message}
                    </p>
                </div>
                <div>
                    <button type="submit" className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white my-2 w-72 rounded-md">{submitText}</button>
                </div>
            </form>
            <div className="space-x-1">
                <button className="py-3 px-6 bg-white hover:bg-gray-200 my-2 w-44 rounded-md" onClick={() => GoogleSumbit()}>
                    <i className="fab fa-google mr-1"></i>
                    Google
                </button>
                <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-200 text-white my-2 w-44 rounded-md" onClick={() => FacebookSumbit()} disabled>
                    <i className="fab fa-facebook-square mr-1"></i>
                    Facebook
                </button>
            </div>
            <div className="my-2">
                <p>
                    Vous n'avez pas encore de compte ? <a href="/register" className='hover:underline'>Inscrivez-vous</a>
                </p>
            </div>
        </div>
    )
}