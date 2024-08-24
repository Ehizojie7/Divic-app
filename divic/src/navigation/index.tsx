import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import LoginScreen from '../screens/LoginScreen';
import TabNavigation from './TabNavigation';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
        />

      <Stack.Screen 
        name="Main"
        component={TabNavigation} 
        options={{headerShown: false}}
        />

    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
