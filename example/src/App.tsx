import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

// navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

import FirstPage from './FirstPage';
import SettingsPage from './SettingsPage';
import { SwitchProvider } from './SwitchContext';

export default function App() {

  return (
    <SwitchProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Dojo SDK" component={FirstPage} />
          <Stack.Screen name = "Settings" component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SwitchProvider>
  );
}