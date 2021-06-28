import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Home, SelectedTask, CreateTask } from '../screens';

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
      />
      <App.Screen
        name="CreateTask"
        component={CreateTask}
      />
    </App.Navigator>
  );
}

export default AppRoute;