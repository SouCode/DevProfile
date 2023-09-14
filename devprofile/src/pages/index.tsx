import HomeBackground from '~/components/HomeBackground';
import HomeHeader from '~/components/HomeHeader';
import NavBar from '~/components/NavBar';
import About from '../components/About';
import Work from '~/components/Work';
import Contact from '~/components/contact';
// ... other imports

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HomeBackground />
      <HomeHeader offsetTop="200px" offsetRight="800px" />
      <div id="about">
        <About />
      </div>
      <Work />
      <Contact />
      {/* ... other sections */}
    </div>
  );
}

export default Home;
