import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';

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
  HeaderTitle,
  HeaderLogo,
  HeaderFilter,
  HeaderPages,
  HeaderPagesButton,
  HeaderPagesNavigation
} from './style';

const Dashboard = ({ navigation }) => {
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [filterInput, setFilterInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    api.char.get()
    .then(response => {
      setChars(response.data.results);
      setInfo(response.data.info);
      setFilterInput('');

      setIsLoading(false);
    });
  }, []);

  const next = useCallback(() => {
    axios.get(info.next)
    .then(response => {
      setChars(response.data.results);
      setInfo(response.data.info);
    });
  }, [info]);

  const prev = useCallback(() => {
    axios.get(info.prev)
    .then(response => {
      setChars(response.data.results);
      setInfo(response.data.info);
    });
  }, [info]);

  const filter = useCallback(() => {
    api.char.get(`?name=${filterInput}`)
    .then(response => {
      setChars(response.data.results);
      setInfo(response.data.info);
    })
  }, [filterInput]);

  return (
    <Background>
      <Header>
        <HeaderTitle>
          <HeaderLogo source={logo} />
          <HeaderFilter 
            placeholder="Filter character" 
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            isFocus={isFocus}
            value={filterInput}
            onChangeText={value => setFilterInput(value)}
            onSubmitEditing={filter}
          />
        </HeaderTitle>
        <HeaderPages>
          <HeaderPagesButton onPress={init}>
              <Icon name="home" size={20} color="#fff" />
          </HeaderPagesButton>

          <HeaderPagesNavigation>
            <HeaderPagesButton onPress={prev} style={{ marginRight: 15 }}>
              <Icon name="left" size={20} color="#fff" />
            </HeaderPagesButton>

            <HeaderPagesButton onPress={next}>
              <Icon name="right" size={20} color="#fff" />
            </HeaderPagesButton>
          </HeaderPagesNavigation>
        </HeaderPages>
      </Header>

      {isLoading && (
        <View style={{ marginTop: 40 }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {!isLoading && (
        <ListChars 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={chars}
          keyExtractor={char => char.id.toString()}
          renderItem={({ item }) => (
            <Container onPress={() => navigation.navigate('Character', { id: item.id })}>
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
      )}
      
      
    </Background>
  );
}

export default Dashboard;
