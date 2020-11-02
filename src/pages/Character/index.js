import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { format } from 'date-fns';

import api from '../../service/api';

import Background from '../../components/BackgroundProfile';
import Label from './Label';

import { Container, Photo, Infos } from './style';

const Character = ({ route }) => {
  const { id } = route.params;

  const [char, setChar] = useState({});
  const [location, setLocation] = useState('');
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    api.char.get(`/${id}`)
    .then((response) => {
      setChar(response.data);
      setLocation(response.data.location.name);
      setOrigin(response.data.origin.name);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <Background>
      {
        char !== {}
        &&
        <ScrollView>
          <Container>
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
                description={format(new Date(char.created), 'yyyy-MM-dd')}
              />
            </Infos>
          </Container>
        </ScrollView>
      }
    </Background>
  )
}

export default Character;