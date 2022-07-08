import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Main from './pages/Order/Main';
import Order from './pages/Order';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{tabBarIcon: ({color}) => <Feather name="edit" size={20} color={color}/>}} 
          name="Main" 
          component={Main} 
        />
        <Tab.Screen 
          options={{tabBarIcon: ({color}) => <Feather name="clipboard" size={20} color={color}/>}} 
          name="Order" 
          component={Order} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}