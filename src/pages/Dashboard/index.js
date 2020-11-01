import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, Text, FlatList, Platform, Image } from 'react-native';
import axios from 'axios';

import api from '../../service/api';

import logo from '../../assets/logo.jpg';

import { 
  ListChars, 
  Container, 
  Infos, 
  Photo, 
  Name, 
  Description, 
  Header, 
  HeaderLogo,
  HeaderPages,
  HeaderPagesButton,
  HeaderPagesButtonText,
  HeaderPagesNavigation
} from './style';

const Dashboard = () => {
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);

  const isAndroid = useMemo(() => Platform.OS === 'android', [Platform.OS]);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    api.char.get()
    .then(async response => {
      setChars(response.data.results);
      setInfo(response.data.info);
    });
  }, []);

  const next = useCallback(() => {
    axios.get(info.next)
    .then(async response => {
      setChars(response.data.results);
      setInfo(response.data.info);
    });
  }, [info]);

  const prev = useCallback(() => {
      axios.get(info.prev)
      .then(async response => {
        setChars(response.data.results);
        setInfo(response.data.info);
      });
  }, [info]);

  return (
    <>
      <Header>
        <HeaderLogo source={logo} />
        <HeaderPages>
          <HeaderPagesButton onPress={init}>
              <HeaderPagesButtonText>
                init
              </HeaderPagesButtonText>
          </HeaderPagesButton>

          <HeaderPagesNavigation>
            <HeaderPagesButton onPress={prev} style={{ marginRight: 15 }}>
              <HeaderPagesButtonText>
                {`<`}
              </HeaderPagesButtonText>
            </HeaderPagesButton>

            <HeaderPagesButton onPress={next}>
              <HeaderPagesButtonText>
                {`>`}
              </HeaderPagesButtonText>
            </HeaderPagesButton>
          </HeaderPagesNavigation>
        </HeaderPages>
      </Header>
      <ListChars 
        isAndroid={isAndroid}
        showsVerticalScrollIndicator={false}
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
    </>
  );
}

export default Dashboard;
