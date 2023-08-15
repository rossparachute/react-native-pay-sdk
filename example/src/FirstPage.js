
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Button } from '@rneui/themed';

// sdk
import { startPaymentFlow } from '@dojo-engineering/react-native-pay-sdk';
import { useSwitchContext } from './SwitchContext';

const FirstPage = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (value) => {
    setUserInput(value);
  }

  const handlePress = () => {
    pay();
  }

  const pay = () => {
    startPaymentFlow({
      intentId: userInput,
    }).then((res) => {
      setResult(res);
    });
  };

  const navigation = useNavigation();
  const { isEnabled, selectedIndex } = useSwitchContext();

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
      />
      <Button
        title="Submit"
        color='#008275'
        onPress={handlePress}
      />
      <View style={{ margin: 10, alignItems: 'center', }}>
        <Text>{isEnabled ? "GPay Enabled" : "GPay Disabled"} </Text>
        <Text>Theme: {selectedIndex} </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Settings"
          type='clear'
          hide='true'
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    display: "none"
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    width: 200,
  },
});

export default FirstPage;