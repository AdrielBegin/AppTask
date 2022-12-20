import React, {useState,useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../Login/styles";
import database from "../../config/firebase";
import {collection, doc, onSnapshot, query, getDoc, setDoc} from 'firebase/firestore/';


export default function Login(){



    return(
        <View style={styles.container}>
            <Text>Login</Text>   
            <TextInput
            style={styles.inputTextEmail}
            placeholder="Exemplo: Adriel"
            />
            <Text>Senha</Text>  
            <TextInput
            style={styles.inputTextPassword}
            placeholder=" **************"
            />
            <TouchableOpacity
            style={styles.ButtonEnter}
            >
                
                <Text 
                color="#ffffff"               
                >Enter</Text>
            </TouchableOpacity>
        </View>
    )
};


