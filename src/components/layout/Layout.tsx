import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Credits from './Credits';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <Credits />
        </div>
    );
};

export default Layout;
