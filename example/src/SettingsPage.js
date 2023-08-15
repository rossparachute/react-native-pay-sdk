import React from 'react';
import { Text, View, StyleSheet, Switch} from 'react-native';

import { useSwitchContext } from './SwitchContext';

const SettingsPage = ({}) => {

    const { isEnabled, toggleSwitch } = useSwitchContext();

    return (
        <View style = {styles.mainContainer} >
            <Text style = {styles.label} >GPay</Text>
            <Switch
                name = "GPay switch"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
    mainContainer: {
        padding:80,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        margin:10,
        fontSize:22,
        fontWeight: 'bold'
    }


})


export default SettingsPage;