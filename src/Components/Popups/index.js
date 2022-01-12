import Search from "./Search";

export function OpenPopUp(name) {
    document.getElementById(`popup-${name}`).classList.remove('hidden')
}
export function ClosePopUp(name) {
    document.getElementById(`popup-${name}`).classList.add('hidden')
}
function PopUp({name}) {
    return(
        <div id={`popup-${name}`} className="hidden"> 
            <div className={`bg-black/90 backdrop-blur-sm w-full h-full fixed top-0 left-0 z-40`} onClick={() => ClosePopUp(name)}>
            </div>
            <div className="fixed bg-white rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex py-6 px-1 w-full h-2/3 z-50">
                <div className="absolute top-0 right-2 cursor-pointer text-black text-2xl" onClick={() => ClosePopUp(name)}>
                    <i className="fas fa-times"></i>
                </div>
                {name === "search" ? <Search /> : <p>Aucun contenu !</p>}
            </div>
        </div>
    )
}

export default PopUp