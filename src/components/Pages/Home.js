import '../Styling/home.css';
import HeaderComp from '../Nav/Header';
// import AboutUs from './AboutUs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
        <HeaderComp />
        <h1 className="h1-home home">Heres the main content</h1>
        <div>
            <h2>text</h2>
        </div>
        <Footer />
        </>
    );
};

export default Home;