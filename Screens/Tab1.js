import React from 'react';
import {View, Text, ColorPropType, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../Constants/Colors';

const Tab1 = (props) => {
    return(
    <LinearGradient colors = {[ Colors.AccentColor,Colors.PrimaryColor]}
    style = {styles.gradient}>
            <Text>
                Tab1
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
export default Tab1;