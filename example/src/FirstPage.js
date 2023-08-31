import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Button } from '@rneui/themed';

// sdk
import {
  startPaymentFlow,
  startSetupFlow 
} from '@dojo-engineering/react-native-pay-sdk';
import { useSwitchContext } from './SwitchContext';

const FirstPage = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (value) => {
    setUserInput(value);
  };

  const handleSetupIntentPress = () => {
    startSetupFlow({
      intentId: userInput,
      darkTheme: darkThemeEnabled === 1,
      forceLightMode: darkThemeEnabled === 0,
    }).then((res) => {
      Alert.alert(`Result: ` + res);
    });
  };

  const handlePaymentIntentPress = () => {
    startPaymentFlow({
      intentId: userInput,
      darkTheme: darkThemeEnabled === 1,
      forceLightMode: darkThemeEnabled === 0,
      applePayMerchantId: getAppleMerchantId(),
      gPayMerchantId: getGPayMerchantId(),
      gPayGatewayMerchantId: getGPayGatewayMerchantId(),
    }).then((res) => {
      Alert.alert(`Result: ` + res);
    });
  };

  function getAppleMerchantId() {
    var merchantId;
    if (walletPaymentsEnabled) {
      merchantId = `merchant.ApplePay.id.test`;
    }
    return merchantId;
  }

  function getGPayMerchantId() {
    var merchantId;
    if (walletPaymentsEnabled) {
      merchantId = `dojo`;
    }
    return merchantId;
  }

  function getGPayGatewayMerchantId() {
    var merchantId;
    if (walletPaymentsEnabled) {
      merchantId = `merchant.GPay.gateway.test`;
    }
    return merchantId;
  }

  const navigation = useNavigation();
  const { walletPaymentsEnabled, darkThemeEnabled } = useSwitchContext();

  return (
    <View style={styles.mainContainer}>

      <TextInput style={styles.input} onChangeText={handleChange} placeholder='IntentId' />

      <View style={styles.leftContainer}>
        <Text style={styles.settingsLabels}>WalletPayments: {walletPaymentsEnabled ? "Enabled" : "Disabled"} </Text>
        <Text style={styles.settingsLabels}>Theme: {darkThemeEnabled === 0 ? "Light" : "Dark"} </Text>
      </View>

      <View style={styles.rightContainer}>
        <Button
          title="Settings"
          type='clear'
          onPress={() => navigation.navigate('Settings')}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="StartSetupFlow"
            color='#008275'
            onPress={handleSetupIntentPress}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="StartPaymentFlow"
            color='#008275'
            onPress={handlePaymentIntentPress}
          />
        </View>
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
  },
  leftContainer: {
    padding: 15,
    alignSelf: 'flex-start',
  },
  rightContainer: {
    padding: 10,
    alignSelf: 'flex-end',
    marginTop:-60
  },
  bottomContainer: {
    padding:10,
    marginTop:80
  },
  input: {
    borderWidth: 0.8,
    width: 200,
    marginTop: 280,
    fontSize: 20,
    padding: 10
  },
  settingsLabels: {
    fontSize: 15,
  },
  buttonWrapper: {
    marginVertical: 8,
  },

});

export default FirstPage;