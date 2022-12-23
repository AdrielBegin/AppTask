import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'     
    },
    
    label:{
     width:"90%",
     left:16,
     marginTop:15,     
     fontSize:16,
     color:"#7600a9"
    },
    inputText:{
    width:"90%",
    marginTop:10,
    padding:10,
    height:50,
    borderBottomWidth:1,
    borderBottomColor:"#7600a9",
    marginLeft:"auto",
    marginRight:"auto"

    },
    buttonNewTask:{
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#7600a9",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"

    },
    iconButton:{
        color:"#FFFFFF",
        fontSize:13,
        fontWeight:"bold"
    }
});

export default styles