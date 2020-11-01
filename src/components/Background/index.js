import React from 'react';
import { StatusBar } from 'react-native';

import { Background, BackgroundImage } from './style';

import background from '../../assets/background.png';

const BackgroundComponent = ({ children }) => (

  <Background>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    
    <BackgroundImage source={background} resizeMode="cover" blurRadius={5}>
      { children }
    </BackgroundImage>
  </Background>
);

export default BackgroundComponent;