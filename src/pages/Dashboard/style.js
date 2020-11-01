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