import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from './paths/Home';
import Menu from './paths/Menu';
import DessertDetails from './paths/DessertDetails';
import About from './paths/About';
import NavDessert from './components/NavDessert';
import NotFound from './paths/NotFound';
import "./index.css";

const RoutedDessert = () => {
    const location = useLocation();

    return (
        <div className="container">
            {location.pathname !== "/404" && <NavDessert />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="dessertdetails/:id" element={<DessertDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </div>
    );
}

export default RoutedDessert;
