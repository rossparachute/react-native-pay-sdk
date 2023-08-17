import React from 'react';
import { Text, View, StyleSheet, Switch, Platform } from 'react-native';
import { useSwitchContext } from './SwitchContext';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SettingsPage = () => {

    const { isEnabled, toggleSwitch, selectedIndex, handleIndexChange } = useSwitchContext();
    var OSpay = ""
    if (Platform.OS === 'android'){
        OSpay = "GPay";
    }
     else if (Platform.OS === 'ios') {
        OSpay = "ApplePay";
    }  


    return (
        <View style={styles.mainContainer} >
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.label} >{OSpay}</Text>
                <Switch style={{ margin: 10, color: 'blue' }}
                    name="OSpay Switch"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.segmentContainer} >
                <SegmentedControlTab
                    values={['Light Theme', 'Dark Theme']}
                    selectedIndex={selectedIndex}
                    onTabPress={handleIndexChange}
                    activeTabStyle={styles.activeTabStyle}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabTextStyle}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        margin: 10,
        fontSize: 17,
    },
    segmentContainer: {
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 20,
        width: 200
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



})


export default SettingsPage;