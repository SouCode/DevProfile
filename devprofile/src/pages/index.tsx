import HomeBackground from '~/components/HomeBackground';
import HomeHeader from '~/components/HomeHeader';
import NavBar from '~/components/NavBar';
import About from '../components/About';
import Work from '~/components/Work';
import Contact from '~/components/contact';
// ... other imports

const Home: React.FC = () => {
  return (
    <>
    <div className="p-0 m-0">
      <NavBar />
      <HomeBackground />
      <HomeHeader offsetTop="200px" offsetRight="800px" />
    </div>
    <div id="about">
      <About />
    </div>
    <div>
      <Work />
    </div>
    <div>
      <Contact />
    </div>
    </>
  );
}

export default Home;
