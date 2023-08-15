import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { useSwitchContext } from './SwitchContext';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SettingsPage = () => {

    const { isEnabled, toggleSwitch, selectedIndex, handleIndexChange } = useSwitchContext();

    return (
        <View style={styles.mainContainer} >
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.label} >GPay</Text>
                <Switch style={{ margin: 10, color: 'blue' }}
                    name="GPay switch"
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