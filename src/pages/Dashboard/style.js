import styled from 'styled-components/native';

export const ListChars = styled.FlatList`
  margin: 0 24px;
  margin-top: ${props => props.isAndroid ? 30 : 60}px;
`;

export const Container = styled.TouchableOpacity`
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
  border-radius: 10px;
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
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
  color: #fff;
`;

export const Header = styled.View`
  margin-bottom: 50px;
`;

export const HeaderLogo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;


export const HeaderPages = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const HeaderPagesButton = styled.TouchableOpacity`
  padding: 8px 20px;
  background: rgb(47, 147, 49);
  border-radius: 4px;
`;

export const HeaderPagesButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderPagesNavigation = styled.View`
  flex-direction: row;
`;
