import React from 'react';
import { Text, View, StyleSheet, Switch, Platform } from 'react-native';
import { useSwitchContext } from './SwitchContext';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SettingsPage = () => {
  const {
    // @ts-ignore: will refactor later
    walletPaymentsEnabled,
    // @ts-ignore: will refactor later
    toggleSwitch,
    // @ts-ignore: will refactor later
    darkThemeEnabled,
    // @ts-ignore: will refactor later
    handleIndexChange,
  } = useSwitchContext();
  var OSpay = '';
  if (Platform.OS === 'android') {
    OSpay = 'GPay';
  } else if (Platform.OS === 'ios') {
    OSpay = 'ApplePay';
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewFlexDirection}>
        <Text style={styles.label}>{OSpay}</Text>

        <Switch
          style={styles.rightContainer}
          onValueChange={toggleSwitch}
          value={walletPaymentsEnabled}
        />
      </View>

      <View style={styles.viewFlexDirection}>
        <Text style={styles.label}>Theme</Text>
        <View style={[styles.segmentContainer, styles.rightContainer]}>
          <SegmentedControlTab
            values={['Light', 'Dark']}
            selectedIndex={darkThemeEnabled}
            onTabPress={handleIndexChange}
            activeTabStyle={styles.activeTabStyle}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexDirection: {
    flexDirection: 'row',
  },
  mainContainer: {
    paddingRight: 55,
    paddingLeft: 55,
    paddingTop: 15,
  },
  label: {
    marginLeft: -30,
    fontSize: 17,
    padding: 10,
    fontWeight: '500',
  },
  segmentContainer: {
    marginTop: 5,
    width: 150,
  },

  rightContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
  },

  activeTabStyle: {
    backgroundColor: '#008275',
    borderColor: 'white',
  },
  tabStyle: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  tabTextStyle: {
    color: '#008275',
  },
});

export default SettingsPage;
