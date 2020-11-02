import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  margin-bottom: 50px;
  margin: 0 24px;
  margin-top: ${Platform.OS === 'android' ? 20 : 45}px;
`;

export const HeaderLogo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderFilter = styled.TextInput`
  margin-left: 8px;
  height: 45px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 10px;
  border-radius: 8px;
  flex: 1;
  font-size: 18px;

  border: ${(props) => (props.isFocus ? 'rgb(47, 147, 49) solid 1px;' : '#fff solid 1px')};
`;

export const HeaderPages = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const HeaderPagesButton = styled(RectButton)`
  padding: 8px 20px;
  background: rgb(47, 147, 49);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const HeaderPagesButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderPagesNavigation = styled.View`
  flex-direction: row;
`;

export const ListChars = styled.FlatList`
  margin: 15px 24px 0;
`;

export const Container = styled(RectButton)`
  margin-bottom: 20px;
  background: rgba(47, 147, 49, 0.85);
  padding: 10px;
  border-radius: 4px;
  flex-direction: row;
`;

export const Infos = styled.View`
  flex: 1;
`;

export const Photo = styled.Image`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
  flex: 1;
  min-height: 23px;
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
  color: #fff;
`;
