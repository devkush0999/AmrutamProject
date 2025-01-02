import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ForumScreen from '../screens/ForumScreen';
import ThoughtsScreen from '../screens/ThoughtsScreen';
import AppoinmentScreen from '../screens/AppoinmentScreen';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PatientScreen from '../screens/PatientScreen';
import BulletinScreen from '../screens/BulletinScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
   <Provider store={store}>
  <NavigationContainer>
  <Tab.Navigator initialRouteName="Forum" screenOptions={{ headerShown: true }}>
    <Tab.Screen name="Forum" component={ForumScreen} />
    <Tab.Screen name="Thoughts" component={ThoughtsScreen} />
    <Tab.Screen name="Appoinment" component={AppoinmentScreen} />
    <Tab.Screen name="Patient" component={PatientScreen} />
    <Tab.Screen name="Bulletin" component={BulletinScreen} />
  </Tab.Navigator>
  </NavigationContainer>
  </Provider>
);

export default TabNavigator;


