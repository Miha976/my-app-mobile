import { createContext, useState } from "react";
export const Contexts = createContext("")
export default function ContextProvider({children}) {
    const [menu, isOpened] = useState(false)
    function toggleMenu() {
        isOpened(!menu)
    }
    return(
        <Contexts.Provider value={{ toggleMenu, menu }}>
            {children}
        </Contexts.Provider>
    )
}