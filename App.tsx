import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';


const App = () => {
  const [hello, setHello] = useState(true);

  useEffect(()=>{
    // setTimeout(()=>{
    //   setHello(false)
    // },2000)
  },[])

  return (
    <View style={styles.mainView}>
      <Nav nameOfApp="Awesome app"/>
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
      {/* { hello ?
        <Text>Hello everybody</Text>
        :null
      } */}
      <View>
        <Generate></Generate>
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