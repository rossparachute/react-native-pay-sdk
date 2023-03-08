import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { startPaymentFlow } from 'dojo-react-native-pay-sdk';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  const pay = () => {
    startPaymentFlow({ intentId: '', darkTheme: true }).then((res) => {
      setResult(res);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pay" onPress={pay} />
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
