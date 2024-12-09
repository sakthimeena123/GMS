import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import loginPage from '../View/loginPage';
import otpPage from '../View/Otppage';
import homePage from '../View/homepage';
import NewOrder from '../View/newOrder';
import OrderTrack from '../View/OrderTrackPage';
import Track from '../View/TrackingPage';
import Profile from '../View/profile';
import Editprofile from '../View/Editprofile';
import AboutUs from '../View/AboutUs';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../Components/bottomtab';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginPage"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginPage" component={loginPage} />
        <Stack.Screen name="otpPage" component={otpPage} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="NewOrder" component={NewOrder} />
        <Stack.Screen name="OrderTrack" component={OrderTrack} />
        <Stack.Screen name="Track" component={Track} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
