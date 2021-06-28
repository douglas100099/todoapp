import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Home, SelectedTask, CreateTask } from '../screens';
import { Colors } from '../styles/theme';

const App = createNativeStackNavigator();
const AppRoute = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="SelectedTask"
        component={SelectedTask}
        options={{
          headerTitle: 'Tarefa',
          headerStyle:{
            backgroundColor: Colors.Background_light,
          },
          headerTitleStyle: {
            color: Colors.White,
          }
        }}
      />
      <App.Screen
        name="CreateTask"
        component={CreateTask}
        options={{
          headerTitle: 'Criar tarefa',
          headerStyle:{
            backgroundColor: Colors.Background_light,
          },
          headerTitleStyle: {
            color: Colors.White,
          }
        }}
      />
    </App.Navigator>
  );
}

export default AppRoute;