import React, {useState,useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../Home/styles";
import database from "../../config/firebase";
import {collection, doc, onSnapshot, query, getDoc, setDoc} from 'firebase/firestore/';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Login({navigation}){



    return(
        <View style={styles.container}>
            <Text style={styles.textWelcome}>Welcome my tasks</Text>   

            <MaterialIcons name="emoji-objects" 
            size={50} 
            color="black" /> 

            <TouchableOpacity
            style={styles.buttonTask}
            onPress={()=> navigation.navigate("Task")}
            >                
                {<MaterialIcons 
                name="navigate-next" 
                size={55} 
                color="#7600a9" />}
            <Text style={styles.textNext}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
};


