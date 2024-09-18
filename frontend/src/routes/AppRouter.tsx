import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import LoginPage from "../pages/Login-Page";
import ChartsPage from "../pages/ChartsPage";
import { PrivateRoute } from "./PrivateRoute";
import { AnimatePresence } from "framer-motion";

export const AppRouter = () =>{
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/home" element={<PrivateRoute />}>
                    <Route path="/home" element={<ChartsPage />}/>
                </Route>
            </Routes>
        </AnimatePresence>
    );
}