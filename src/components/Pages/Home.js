import '../Styling/home.css';
import HeaderComp from '../Nav/Header';
import AboutUs from './AboutUs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
        <HeaderComp />
        <h1 className="h1-home">Heres the main content</h1>
        <h2> <a href='/aboutUs'>here is the route to about us</a></h2>
        <Footer />
        </>
    );
};

export default Home;