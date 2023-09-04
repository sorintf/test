import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Nav from './src/nav';


const App = () => {
  return (
    <View style={styles.mainView}>
      <Nav>
        Hello there
      </Nav>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>
          Hello 1
        </Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>
          Hello 2
        </Text>
      </View>
      <View>
        <Text>
          Hell For Everyone
        </Text>
      </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    mainView:{
      flex:1,
      paddingTop:50, 
      backgroundColor:'#00ff00', 
      alignItems:'center', // center X axis
      justifyContent:'center', // center Y axis
    },
    basicView:{
      backgroundColor:'#ff00ff', 
      width:'90%', 
      marginVertical:'auto',
      marginBottom:5
    },
    basicText:{
      padding:10,
      color:'#ffffff', 
      fontSize:20,
      fontWeight:'700', 
      textAlign:'center'
    }
})


export default App;