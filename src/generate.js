import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';


const Generate = (props) => (
    <TouchableHighlight 
        onPress={()=>alert('pressed')} 
        underlayColor="red" 
        activeOpacity={0.1} 
        // onHideUnderlay={()=> alert('hide')}
        // onShowUnderlay={()=> alert('show')}
    >
        <View style={styles.generate}>
            <Text style={{color:'#ffffff'}}>Add number</Text>
        </View>
    </TouchableHighlight>
)

const styles =  StyleSheet.create({
    generate:{
        backgroundColor:'#00bcd4', 
        alignItems:'center', // center X axis
        padding:10, 
        width:'100%'
    }
})

export default Generate;