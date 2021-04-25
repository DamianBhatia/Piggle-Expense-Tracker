import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard" drawerPosition="right">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Transactions" component={Transactions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}