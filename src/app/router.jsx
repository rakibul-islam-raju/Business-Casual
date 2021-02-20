import { Router } from '@reach/router';
import About from '../pages/About';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Store from '../pages/Store';

function AppRouter() {
    return (
        <Router>
            <Home path="/" />
            <About path="/about" />
            <Products path="/products" />
            <Store path="/store" />
        </Router>
    );
}

export default AppRouter;
