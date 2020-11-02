import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const Back = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.9);
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const Container = styled.View`
  margin: 0 24px 40px;
  ${Platform.OS === 'ios' && 'margin-top: 60px;'}
`;

export const Photo = styled.Image`
  width: 215px;
  height: 215px;
  border-radius: 108px;
  margin: auto;
  margin-bottom: 40px;
`;

export const Infos = styled.View`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  padding: 15px;
`;