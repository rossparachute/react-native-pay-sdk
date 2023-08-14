import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native"

import { useSwitchContext } from './SwitchContext';

const SettingsPage = ({}) => {
   //const [isEnabled, setIsEnabled] = useState(useRoute().params?.gpayEnabled);

    const { isEnabled, toggleSwitch } = useSwitchContext();

    return (
        <View style = {styles.mainContainer} >
            <Text style = {styles.label} >GPay</Text>
            <Switch
                name = "GPay switch"
                //onValueChange = {useRoute().params.onSelect}
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