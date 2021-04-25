import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import { COLORS } from './colors.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={styles.drawer} initialRouteName="Dashboard" drawerPosition="right">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Transactions" component={Transactions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: COLORS.background,
    fontSize: 28,
  }
})