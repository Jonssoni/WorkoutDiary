// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetIn from './pages/Getin';  
import MainScreen from './pages/MainScreen';  

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
