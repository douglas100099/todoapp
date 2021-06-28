import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Home, SelectedTask } from '../screens';

const App = createNativeStackNavigator();
const AppRoute = () => {
  return (
    <App.Navigator>
      <App.Screen 
        name="Home" 
        component={Home}
      />
      <App.Screen 
        name="SelectedTask" 
        component={SelectedTask}
      />
    </App.Navigator>
  );
}

export default AppRoute;