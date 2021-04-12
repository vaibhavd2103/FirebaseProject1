import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../Constants/Colors';

const Tab3 = (props) => {
    return(
    <LinearGradient colors = {[ Colors.AccentColor,Colors.PrimaryColor]}
    style = {styles.gradient}>
            <Text>
                Tab3
            </Text>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient:{
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0
    }
})
export default Tab3;