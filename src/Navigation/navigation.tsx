import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import loginPage from '../View/loginPage';
import otpPage from '../View/Otppage';
import homePage from '../View/homepage';
import newOrder from '../View/newOrder';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName="newOrder" 
      screenOptions={{headerShown: false}}  
    >
      <Stack.Screen name="loginPage" component={loginPage} />
      <Stack.Screen name="otpPage" component={otpPage} />
      <Stack.Screen name="homePage" component={homePage} />
      <Stack.Screen name="newOrder" component={newOrder} />

    </Stack.Navigator>
  );
};

export default StackNavigator;