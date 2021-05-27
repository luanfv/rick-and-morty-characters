import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, Alert } from 'react-native';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../service/api';

import Background from '../../components/BackgroundProfile';
import Label from './Label';

import { Header, Back, Container, Photo, Infos } from './style';

const Character = ({ route, navigation }) => {
  const { id } = route.params;

  const [char, setChar] = useState(undefined);
  const [location, setLocation] = useState('');
  const [origin, setOrigin] = useState('');
  const [created, setCreated] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    api.char.get(`/${id}`)
    .then((response) => {
      setChar(response.data);
      setLocation(response.data.location.name);
      setOrigin(response.data.origin.name);
      setCreated(format(new Date(response.data.created), 'yyyy-MM-dd'));
    })
    .catch(() => Alert.alert(
      'Connection problem', 
      'Could not load the character list, check your Internet connection and try again',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reload', onPress: () => init() }
      ],
    ))
    .finally(() => setIsLoading(false));
  }, []);

  return (
    <Background>
      {isLoading && (
        <View style={{ marginTop: 40 }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}

      {!isLoading && char && (
        <ScrollView>
          <Container>
            <Header>
              <Back onPress={() => navigation.goBack()}>
                <Icon name="left" size={30} color="#000" />
              </Back>
            </Header>
            <Photo source={{ uri: char.image }} />
            <Infos>
              <Label 
                title="Name"
                description={char.name}
              />
              <Label 
                title="Status"
                description={char.status}
              />
              <Label 
                title="Species"
                description={char.species}
              />
              <Label 
                title="Type"
                description={char.type ? char.type : 'Undefined'}
              />
              <Label 
                title="Gender"
                description={char.gender}
              />
              <Label 
                title="Origin"
                description={origin}
              />
              <Label 
                title="Location"
                description={location}
              />
              <Label 
                title="Created"
                description={created}
              />
            </Infos>
          </Container>
        </ScrollView>
      )}
    </Background>
  )
}

export default Character;