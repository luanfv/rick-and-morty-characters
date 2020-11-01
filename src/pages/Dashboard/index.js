import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Platform } from 'react-native';
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
  HeaderTitle,
  HeaderLogo,
  HeaderFilter,
  HeaderPages,
  HeaderPagesButton,
  HeaderPagesButtonText,
  HeaderPagesNavigation
} from './style';

const Dashboard = () => {
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [filterInput, setFilterInput] = useState('');

  const isAndroid = useMemo(() => Platform.OS === 'android', [Platform.OS]);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    api.char.get()
    .then(response => {
      setChars(response.data.results);
      setInfo(response.data.info);
      setFilterInput('');
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
    <>
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
