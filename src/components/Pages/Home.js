import '../Styling/Pages/home.css';
import HeaderComp from '../Nav/Header';
import AboutUs from './AboutUs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
        <HeaderComp />
        <h1 className="h1-home home">Heres the main content</h1>
        <div>
            <button className='main-button'>Click me</button>
        </div>
        <Footer />
        </>
    );
};

export default Home;