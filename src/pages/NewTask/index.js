import React, {useState,useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../NewTask/styles";
import database from "../../config/firebase";
import {collection, doc, onSnapshot, query, getDoc, setDoc} from 'firebase/firestore/';
import { FontAwesome5 } from '@expo/vector-icons';


export default function NewTask({navigation}){

    const [description, setDescription] = useState(null);

    function addTask(){
        database.collection("Tasks").add({
            description:description,
            status: false
        })
        navigation.navigate("Task")
    }


    return(
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Example: study database"
            onChangeText={setDescription}
            value={description}
            />
            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={()=>{addTask()}}
            >
                <FontAwesome5 name="save" size={24} color="white" />
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
};


