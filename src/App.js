import React from 'react';
import './App.css';

//components
import Layout from './components/Layout/Layout';
import HeroImage from './components/HeroImage/HeroImage';
import tombLogo from './assets/tombofannihillogo.jpg';

const app = () => {
  return (
    <React.Fragment>
      <HeroImage src={tombLogo} />
      <Layout />
    </React.Fragment>
  );
};

export default app;
