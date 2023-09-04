import React from "react";
import { Text, View, StyleSheet } from 'react-native';


const Nav = (props) => (
    <View style={styles.nav}>
        <Text>My app</Text>
        <Text>{props.children}</Text>
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