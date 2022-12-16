import React, { useState, useEffect } from "react";
import {View, Text,TextInput, TouchableOpacity, FlatList, ImageComponent, StyleSheet, Button} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { NavigationContainer } from '@react-navigation/native';



import styles from "../Task/style";

import database from "../../config/firebase";
import {collection, doc, onSnapshot, query, getDoc, setDoc} from 'firebase/firestore/';


export default function Task({navigation}){
    const [task, setTask] = useState([]);

    function deleteTask(id){

        database.collection("Tasks").doc(id).delete()
    }

    useEffect(()=>{
        
        database.collection("Tasks").onSnapshot((query)=> {
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id});           
                                              
            })            
            setTask(list)
            
        })
    },[])

    return(
        <View style={styles.container} >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task} 
            renderItem={({item})=>{
                return(
                <View style={styles.Tasks}>
                 <TouchableOpacity 
                    style={styles.deleteTask}
                    onPress={()=>{                        
                        deleteTask(item.id)
                    }
                    }>
                        <FontAwesome 
                        name="star" 
                        size={23} 
                        color="#F92E6A">
                        </FontAwesome>
                 </TouchableOpacity>
                        <Text
                        style={styles.descriptionTask}
                        onPress={()=>{
                            navigation.navigate("Details",{id: item.id, description: item.description})
                        }}
                        >
                            {item.description}
                        </Text>
                       
                </View>
                )
            }
            }

          />        

            <TouchableOpacity 
             style={styles.buttonNewTask}
             onPress={()=> navigation.navigate("NewTask")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>      
    

        </View>
    )
}