import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',     
        alignItems:'center',
        paddingVertical:"50%"        
    },
    inputTextEmail:{
        borderBottomWidth:1,
        borderBottomColor:"#7600a9",
        padding:10,

    },
    inputTextPassword:{
        borderBottomWidth:1,
        borderBottomColor:"#7600a9",
        padding:10,

    },
    ButtonEnter:{
        backgroundColor:"#7600a9",   
        alignItems:'center',    
        justifyContent:"center",         
        bottom:90,
        position:"absolute",
        width:80,
        height:60,
        borderRadius:50,

    }

});

export default styles