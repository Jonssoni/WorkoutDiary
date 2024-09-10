import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetIn from './pages/Getin';
import MainScreen from './pages/MainScreen';
import WorkOut from './pages/WorkOut';
import List from './pages/List';
import { WorkoutProvider } from './pages/WorkoutContext';
import Settings from './pages/Settings'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetIn">

          <Stack.Screen
            name="GetIn"
            component={GetIn}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: 'Main Screen',
              headerStyle: {
                backgroundColor: '#CACAAA'
              },
              headerTitleStyle: {
                fontWeight: 'bold',

              }


            }}
          />
          <Stack.Screen
            name="WorkOut"
            component={WorkOut}
            options={{
              title: 'Work Out', headerStyle: {
                backgroundColor: '#CACAAA'
              },
              headerTitleStyle: {
                fontWeight: 'bold',

              }
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: 'List of work', headerStyle: {
                backgroundColor: '#CACAAA'
              },
              headerTitleStyle: {
                fontWeight: 'bold',

              }
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'Settings', headerStyle: {
                backgroundColor: '#CACAAA'
              },
              headerTitleStyle: {
                fontWeight: 'bold',

              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default App;
