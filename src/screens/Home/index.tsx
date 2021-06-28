import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Cards, FloatingButton, Header } from '../../components';
import {
  Container,
  Title,
  ViewIcon,
  ViewBody,
  ViewTitle,
  Subtitle,
  TextDate,
  ButtonSearch,
  ContainerInput,
  Input,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/theme';
import { formatedDate } from '../../commons/utils';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/actions/taskactions';

const Home = ({ navigation }: any) => {
  const task = useSelector((state: RootStateOrAny) => state.taskreducer);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getTasks = () => dispatch(fetchTasks(dispatch));

  useEffect(() => {
    getTasks();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Cards onPress={(data) => navigation.navigate('SelectedTask', { data: data })} data={item} />
    );
  };

  useEffect(() => {
    if(task.tasks){
      setData(task.tasks);
      setFilteredData(task.tasks);
    }
  
  }, [task.tasks]);

  const handleSearch = (query:string) => {
    if(query.length > 0){
      const filtered = data.filter((task:any) =>  task.name.includes(query))
      console.log(filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }

  const renderHeader = () => {
    return (
      <Header>
        <ViewIcon>
          <ContainerInput>
            <ButtonSearch>
              <Ionicons name="search" size={25} color={Colors.White} />
            </ButtonSearch>
            <Input
              keyboardType='default'
              value={query}
              onChangeText={(e) => {
                handleSearch(e)
                setQuery(e)
              }}
            />
          </ContainerInput>
        </ViewIcon>
      </Header>
    )
  }

  return (
    <Container>
      <ViewTitle>
        <Title>TodoApp</Title>
        <Subtitle>Vamos ser produtivos hoje! 🚀</Subtitle>
      </ViewTitle>
      <ViewBody>
        <TextDate>{formatedDate()}</TextDate>
        <FlatList
          ListHeaderComponent={renderHeader()}
          data={filteredData ? filteredData : []}
          renderItem={renderItem}
          keyExtractor={(item: any, index: any) => item.id.toString()}
        />
      </ViewBody>
      <FloatingButton onPress={() => navigation.navigate('CreateTask')} />
    </Container>
  );
}

export default Home;