import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import loginPage from '../View/loginPage';
import otpPage from '../View/Otppage';
import homePage from '../View/homepage';
import NewOrder from '../View/newOrder';
import OrderTrack from '../View/OrderTrackPage';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName="OrderTrack" 
      screenOptions={{headerShown: false}}  
    >
      <Stack.Screen name="loginPage" component={loginPage} />
      <Stack.Screen name="otpPage" component={otpPage} />
      <Stack.Screen name="homePage" component={homePage} />
      <Stack.Screen name="newOrder" component={NewOrder} />
      <Stack.Screen name="OrderTrack" component={OrderTrack} />

    </Stack.Navigator>
  );
};

export default StackNavigator;