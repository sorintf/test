import React from "react";
import { Text, View, StyleSheet } from 'react-native';


const Nav = ({nameOfApp}) => (
    <View style={styles.nav}>
        <Text>{nameOfApp}</Text>
    </View>
)

const styles =  StyleSheet.create({
    nav:{
        color:'#ffffff',
        backgroundColor:'#ff0000', 
        alignItems:'center', // center X axis
        padding:10, 
        width:'100%'
    }
})

export default Nav;