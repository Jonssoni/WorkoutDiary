import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetIn from './pages/Getin';
import MainScreen from './pages/MainScreen';
import WorkOut from './pages/WorkOut';
import List from './pages/List';
import { WorkoutProvider } from './pages/WorkoutContext'; 


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <WorkoutProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetIn">
          <Stack.Screen
            name="GetIn"
            component={GetIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ title: 'Main Screen' }}
          />
          <Stack.Screen
            name="WorkOut"
            component={WorkOut}
            options={{ title: 'Work Out' }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{ title: 'List of work' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default App;
