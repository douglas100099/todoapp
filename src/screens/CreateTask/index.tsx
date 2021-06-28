import React, { useEffect, useState } from 'react';
import { Platform, Button } from 'react-native';
import { ButtonAddTask } from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

import {
  Container,
  ViewInput,
  ContainerInput,
  Input,
  TitleInput,
  InputDesc,
  ContainerInputDesc,
  ButtonDate,
  TitleDate
} from './styles';
import { Colors } from '../../styles/theme';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/actions/taskactions';
import { Ionicons } from '@expo/vector-icons'; 
import { formatedDateDays } from '../../commons/utils';

const CreateTask = ({ navigation } : any) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootStateOrAny) => state.taskreducer);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    title: '',
    description: '',
    priority: '0',
  })

  const handleAddTask = (data:any, date: Date) => {
    dispatch(addTask(data, date, dispatch));
  }

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

  useEffect(() => {
    if(tasks.tasks && tasks.tasks.loadingAddTasks){
      navigation.navigate.goBack();
    };
  }, [tasks.tasks]);

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
            setState({ ...state, priority: itemValue})
          }>
          <Picker.Item label="Baixa" value="0" />
          <Picker.Item label="Média" value="1" />
          <Picker.Item label="Alta" value="2" />
        </Picker>
      </ViewInput>
      <ButtonAddTask
        onPress={() => handleAddTask(state, date)}
        disabled={loading}
        title='Adicionar'
      />
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

export default CreateTask;