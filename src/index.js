import React from 'react';

import Dashboard from './pages/Dashboard';

import background from './assets/background.png';

import { Background, BackgroundImage } from './style';

const App = () => (
  <Background>
    <BackgroundImage source={background} resizeMode="cover" blurRadius={5}>
      <Dashboard />
    </BackgroundImage>
  </Background>
);

export default App;
