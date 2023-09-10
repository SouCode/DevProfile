import React from 'react';
import NavBar from '../components/NavBar';
import HomeBackground from '../components/HomeBackground';
import HomeHeader from '../components/HomeHeader';



const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HomeBackground />
      <HomeHeader offsetTop="200px" offsetRight="800px" />

    </div>
  );
}

export default Home;
