import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native"

const SettingsPage = () => {
//    const [isEnabled, setIsEnabled] = useState(useRoute().params?.gpayEnabled);

    return (
        <View style = {styles.mainContainer} >
            <Text style = {styles.label} >GPay</Text>
            <Switch
                name = "GPay switch"
                onValueChange = {useRoute().params.onSelect}
                value={useRoute().params?.gpayEnabled()}
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