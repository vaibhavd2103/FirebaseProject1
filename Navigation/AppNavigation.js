import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Colors from '../Constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../Screens/Tab1';
import Tab2 from '../Screens/Tab2';
import Tab3 from '../Screens/Tab3';


const Stack = createStackNavigator();

function Navigation () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component={Login}
                options = {{
                    headerTintColor:Colors.PrimaryColor,
                    headerStyle:{
                        backgroundColor:Colors.PrimaryColor,
                    },
                    headerTitle:()=>
                    <Text style={{fontSize:25, fontWeight:"bold", color:Colors.TextColor}}>Login</Text>
                }}
                />
                <Stack.Screen name = "SignUp" component={SignUp}
                options = {{
                    headerTintColor:Colors.AccentColor,
                    headerStyle:{
                        backgroundColor:Colors.PrimaryColor,
                    },
                    headerTitle:()=>
                    <Text style={{fontSize:25, fontWeight:"bold",color:Colors.TextColor}}>Sign Up</Text>
                }}
                />
                <Stack.Screen name = "Home" component={BottomTab}
                options = {{
                    headerTintColor:Colors.AccentColor,
                    headerStyle:{
                        backgroundColor:Colors.PrimaryColor,
                    },
                    headerTitle:()=>
                    <Text style={{fontSize:25, fontWeight:"bold",color:Colors.TextColor}}>SV Music</Text>
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const Tab = createBottomTabNavigator();

function BottomTab() {
    return(
        <Tab.Navigator
        tabBarOptions = {{
            labelPosition:'below-icon',
            activeTintColor:Colors.PrimaryColor,
            
            style:{
                backgroundColor:Colors.BgColor,
            },
            labelStyle:{
                fontSize:20,
                fontWeight:"bold",
            },
            tabStyle:{
                justifyContent:"center",
                alignItems:"center"
            }
        }}
        >
            <Tab.Screen name="Trending" component = {Tab1}/>
            <Tab.Screen name="My Songs" component = {Tab2}/>
            <Tab.Screen name="Account" component = {Tab3}/>
        </Tab.Navigator>  
    )
}
export default Navigation;