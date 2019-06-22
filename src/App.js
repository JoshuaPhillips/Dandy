import React from 'react';
import './App.css';

//components
import Layout from './components/Layout/Layout';
import BannerImage from './components/BannerImage/BannerImage';
import tombLogo from './assets/tombofannihillogo.jpg';

const app = () => {
  return (
    <React.Fragment>
      <BannerImage src={tombLogo} />
      <Layout />
    </React.Fragment>
  );
};

export default app;
