import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, StatusBar} from 'react-native';
import Colors from '../Constants/Colors';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const Login = (props) => {
    return (
            <View style = {styles.container}>
                <StatusBar backgroundColor ={Colors.BgColor} />
                <Image style = {{height:150, width:150 ,borderRadius:300,margin:30, borderWidth:5, borderColor:Colors.AccentColor}}
                source = {require('../assets/login1.jpg')}
                /> 
                <ScrollView style = {{width:400}}>
                    <View style = {{alignItems:"center", marginTop:50}}>
                <Item floatingLabel style = {styles.input}>
                    <Label style = {styles.text}>Username</Label>
                <Input 
                style = {{color:Colors.TextColor}}/>
                </Item>
                <Item floatingLabel style = {styles.input}>
                    <Label style = {styles.text}>Password</Label>
                <Input 
                style = {{color:Colors.TextColor}}/>
                </Item>
                
                <View style = {{marginTop:60}}>
                    <TouchableOpacity onPress = {()=>{props.navigation.navigate("Home")}}
                    style = {styles.login}>
                        <Text style = {{fontSize:25, color:Colors.TextColor, textAlign:"center"}}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.SignUp}>
                    <Text style = {{fontSize:20, color:Colors.TextColor}}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress = {()=>{props.navigation.navigate("SignUp")}}>
                        <Text style = {{fontSize:25, color:Colors.TextColor, marginLeft:7, fontWeight:"bold"}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ScrollView>
            </View>
        );
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:Colors.BgColor,
    },

    text:{
        color:Colors.TextColor
    },

    input:{
        width:300,
        borderBottomWidth:2,
        borderBottomColor:Colors.AccentColor,
        marginTop:10,
        
    },

    login:{
        width:200,
        backgroundColor:Colors.PrimaryColor,
        borderRadius:20,
        paddingTop:7,
        height:50,
        marginTop:50
        
        },

    SignUp:{
        flexDirection:"row",
        marginTop:15,
    },


})
export default Login;