import React from 'react';
import { StatusBar } from 'react-native';

import { Background, BackgroundImage } from './style';

import background from '../../assets/background-profile.jpeg';

const BackgroundProfileComponent = ({ children }) => (

  <Background>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    
    <BackgroundImage source={background} resizeMode="cover" blurRadius={1}>
      { children }
    </BackgroundImage>
  </Background>
);

export default BackgroundProfileComponent;