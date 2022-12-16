import React, {useState,useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./styles";
import database from "../../config/firebase";
import {collection, doc, onSnapshot, query, getDoc, setDoc} from 'firebase/firestore/';


export default function Details({navigation, route}){
    
    const [descriptionEdit, setDescriptionEdit]= useState(route.params.description)
    const idTask = route.params.id

    function editTask(description,id){
        database.collection("Tasks").doc(id).update({
            description:descriptionEdit,
        })
        navigation.navigate("Task")

    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
            style={styles.inputText}
            placeholder="Ex: estudar javascript"
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
            />
            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={()=>{editTask(descriptionEdit,idTask)}}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>

    )
};