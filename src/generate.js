import React from "react";
import { Text, View, StyleSheet } from 'react-native';


const Generate = (props) => (
    <View style={styles.generate}>
        <Text style={{color:'#ffffff'}}>Add number</Text>
    </View>
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