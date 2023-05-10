import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Menu, Header, Footer } from './pages/CommonPage';
import AnimatedRoutes from "./pages/AnimatedRoutes";
import Spinner from "./components/Spinner/Spinner";

import './styles/app.scss';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Menu />
                <div className="main-page">
                    <Header />
                    <Suspense fallback={<Spinner />}>
                        <AnimatedRoutes />
                    </Suspense>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
