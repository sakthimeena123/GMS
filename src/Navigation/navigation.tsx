import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import loginPage from '../View/loginPage';
import otpPage from '../View/Otppage';
import homePage from '../View/homepage';
import NewOrder from '../View/newOrder';
import OrderTrack from '../View/OrderTrackPage';
import Track from '../View/TrackingPage';
import Profile from '../View/profile';
import Editprofile from '../View/Editprofile';
import AboutUs from '../View/AboutUs';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName="AboutUs" 
      screenOptions={{headerShown: false}}  
    >
      <Stack.Screen name="loginPage" component={loginPage} />
      <Stack.Screen name="otpPage" component={otpPage} />
      <Stack.Screen name="homePage" component={homePage} />
      <Stack.Screen name="newOrder" component={NewOrder} />
      <Stack.Screen name="OrderTrack" component={OrderTrack} />
      <Stack.Screen name="Track" component={Track} />
      
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Editprofile" component={Editprofile} />
      <Stack.Screen name="AboutUs" component={AboutUs} />


    </Stack.Navigator>
  );
};

export default StackNavigator;