import React from 'react';
import { View } from 'react-native';
import { Cards, FloatingButton, Header } from '../../components';
import { 
  Container, 
  Title, 
  ViewHeader,
  ViewIcon,
  Image,
  ViewBody,
  ViewTitle,
  Subtitle,
  TextDate
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/theme';
import { formatedDate } from '../../commons/utils';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <ViewHeader>
          <Image source={require('../../../assets/images/mike.jpg')} />
        </ViewHeader>
        <ViewIcon>
          <Ionicons name="search" size={35} color={Colors.Primary} />
        </ViewIcon>
      </Header>
      <ViewTitle>
        <Title>Olá, PVdevops</Title>
        <Subtitle>Vamos ser produtivos hoje! 🚀</Subtitle>
      </ViewTitle>
      <ViewBody>
        <TextDate>{formatedDate()}</TextDate>
        <Cards />
      </ViewBody>
      <FloatingButton />
    </Container>
  );
}

export default Home;