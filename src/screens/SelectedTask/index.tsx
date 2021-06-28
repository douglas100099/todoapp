import React, { Dispatch, useEffect, useState } from 'react';
import { Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import {
  Container,
  ViewInput,
  ContainerInput,
  Input,
  TitleInput,
  InputDesc,
  ContainerInputDesc,
  ButtonDate,
  TitleDate,
  ViewButtons,
  ButtonAction,
  ButtonText
} from './styles';
import { Colors } from '../../styles/theme';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, updateTask } from '../../redux/actions/taskactions';
import { Ionicons } from '@expo/vector-icons';
import { formatedDateDays } from '../../commons/utils';

const SelectedTask = ({ route, navigation }: any) => {
  const dispatch = useDispatch();
  const { data } = route.params;
  console.log(data)
  const tasks = useSelector((state: RootStateOrAny) => state.taskreducer);

  const [date, setDate] = useState(data.date ? new Date(data.date) : new Date());
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    id: data.id,
    title: data.name ? data.name : '',
    description: data.description ? data.description : '' ,
    priority: data.priority ? data.priority : '0',
  })

  const handleDeleteTask = (id: string) => {
    dispatch(removeTask(id, dispatch));
  }

  const handleUpdateTask = (data: any, date: Date) => {
    dispatch(updateTask(data, date, dispatch))
  }

  useEffect(() => {
    if((tasks.tasks && tasks.tasks.loadingUpdateTasks) || (tasks.tasks && tasks.tasks.loadingRemoveTasks)){
      navigation.navigate.goBack();
    };
  }, [tasks.tasks]);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    console.log(selectedDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <Container>
      <ViewInput>
        <TitleInput>Título</TitleInput>
        <ContainerInput>
          <Input
            keyboardType='default'
            value={state.title}
            onChangeText={(e) => setState({ ...state, title: e })}
          />
        </ContainerInput>
      </ViewInput>
      <ViewInput>
        <TitleInput>Descrição</TitleInput>
        <ContainerInputDesc>
          <InputDesc
            keyboardType='default'
            multiline={true}
            textAlignVertical='top'
            defaultValue={data.description}
            value={state.description}
            onChangeText={(e) => setState({ ...state, description: e })}
          />
        </ContainerInputDesc>
      </ViewInput>
      <ViewInput>
        <TitleInput>Data</TitleInput>
        <ButtonDate
          onPress={showDatepicker}
        >
          <Ionicons name="calendar-outline" size={25} color={Colors.White} />
          <TitleDate>{date ? formatedDateDays(date) : 'sem data'}</TitleDate>
        </ButtonDate>
      </ViewInput>
      <ViewInput>
        <TitleInput>Prioridade</TitleInput>
        <Picker
          selectedValue={state.priority}
          style={{
            color: Colors.White,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setState({ ...state, priority: itemValue })
          }>
          <Picker.Item label="Baixa" value="0" />
          <Picker.Item label="Média" value="1" />
          <Picker.Item label="Alta" value="2" />
        </Picker>
      </ViewInput>
      <ViewButtons>
        <ButtonAction
          onPress={() => handleUpdateTask(state, date)}
          disabled={loading}
        >
          <ButtonText>Atualizar</ButtonText>
        </ButtonAction>
        <ButtonAction
          onPress={() => handleDeleteTask(data.id)}
          disabled={loading}
        >
          <ButtonText>Deletar</ButtonText>
        </ButtonAction>
      </ViewButtons>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Container>
  );
}

export default SelectedTask;