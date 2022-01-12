import { useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Filter from "./Filter";
import Header from "./Header";
import Home from "./Home";
import List from "./List";

export default function Shop() {
    return(
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:category" element={<List />}/>
                </Routes>
            </div>
        </div>
    )
}