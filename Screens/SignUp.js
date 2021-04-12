import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import Colors from '../Constants/Colors';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const SignUp = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image style = {{marginVertical:20,height:170, width:170, borderRadius:300, borderWidth:5, borderColor:Colors.AccentColor}}
                source = {require("../assets/login1.jpg")}
                />
            </View>
            <ScrollView style = {styles.inputcon}>
            <View style = {styles.mid}>
            
                <Item floatingLabel style = {styles.input}>
                    <Label style = {styles.text}>Email ID</Label>
                <Input 
                style = {{color:Colors.TextColor}}/>
                </Item>
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
                <Item floatingLabel style = {styles.input}>
                    <Label style = {styles.text}>Confirm Password</Label>
                <Input 
                style = {{color:Colors.TextColor}}/>
                </Item>
            </View>
            <View style = {styles.footer}>
                
                <View style = {styles.signup}>
                    <TouchableOpacity onPress={()=>(props.navigation.navigate("Home"))}>
                <Text style = {{fontSize:25, fontWeight:"bold", color:Colors.TextColor}}>
                    SignUp
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
        flex:1,
        color:Colors.PrimaryColor
    },
    header:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.BgColor
    },
    
    mid:{
        backgroundColor:Colors.BgColor,
        justifyContent:"center",
        alignItems:"center"
    
    },
    footer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.BgColor,
    },

    signup:{
        height:50,
        width:200,
        backgroundColor:Colors.PrimaryColor,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginBottom:140,
        marginTop:80

    },
    input:{
        width:300,
        marginBottom:10,
        borderBottomColor:Colors.AccentColor,
        borderBottomWidth:2,
    },
    text:{
        color:Colors.TextColor
    }

})


export default SignUp;