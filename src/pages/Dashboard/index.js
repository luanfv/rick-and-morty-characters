import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, FlatList, Platform, Image } from 'react-native';

import api from '../../service/api'

import { ListChars, Container, Infos, Photo, Name, Description } from './style'

const Dashboard = () => {
  const [chars, setChars] = useState([]);

  const isAndroid = useMemo(() => Platform.OS === 'android', [Platform.OS]);

  useEffect(() => {
    api.char.get()
    .then(async response => {
      setChars(response.data.results);
    });
  }, []);

  return (
    <ListChars 
      isAndroid={isAndroid}
      showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}
      data={chars}
      keyExtractor={char => char.id}
      renderItem={({ item }) => (
        <Container>
          <Photo source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
          <Infos>
            <Name>
              {item.name}
            </Name>
            <Description>
              Status: {item.status}
            </Description>
            <Description>
              Specie: {item.species}
            </Description>
          </Infos>
        </Container>
      )}
    />
  );
}

export default Dashboard;
