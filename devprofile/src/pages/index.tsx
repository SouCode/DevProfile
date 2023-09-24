import HomeBackground from '~/components/HomeBackground';
import HomeHeader from '~/components/HomeHeader';
import NavBar from '~/components/NavBar';
import About from '../components/About';
import Work from '~/components/Work';
import Footer from '~/components/Footer';


const Home: React.FC = () => {
  return (
    <>
    <div>
      <NavBar />
      <HomeBackground />  
      <HomeHeader offsetTop="200px" offsetRight="800px" />
    </div>
    <div id="about">
      <About />
    </div>
    <div>
      <Work />
      <Footer />
    </div>
    </>
  );
}

export default Home;
