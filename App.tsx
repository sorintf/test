import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator, 
  Image, ImageBackground
} from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';
import ListItems from './src/listitems';
import Inputs from './src/inputs';
import ModalComponent from './src/modal';

import Mountains from './src/assets/mountains.jpg';


const App = () => {
  const [hello, setHello] = useState(true);
  const [random, setRandom] = useState([20,55]);

  useEffect(()=>{
    // setTimeout(()=>{
    //   setHello(false)
    // },2000)
  },[])

  const onAddRandom = () => {
    const randomVal = Math.floor(Math.random() * 100) +1;
    const newState = [...random,randomVal];
    setRandom(newState);
  }

  const onItemRemove = (position) => {
    const newArray = random.filter((item,i) => {
      return position !== i;
    });
    setRandom(newArray);
  }

  return (
    <View style={styles.mainView}>

      <Nav nameOfApp="Awesome app"/>

      <ScrollView 
        // onContentSizeChange={(w,h) => alert(h)}
        // onMomentumScrollBegin={() => alert('start')}
        // onMomentumScrollEnd={() => alert('end')}
        onScroll={(e) => console.log(e.nativeEvent)}
        style={{width:'100%'}}
      >
        <ModalComponent/>
        {/* <ImageBackground 
          source={Mountains}
          style={styles.mountains}
        >
          <Text>Inside text</Text>
        </ImageBackground> */}
        {/* <Image 
          // source={Mountains}
          source={{uri:'https://picsum.photos/400/400'}}
          style={styles.mountains}
          resizeMode='contain'
          onLoadEnd={() => alert('imageloaded')}
        /> */}
        {/* <View style={styles.basicView}>
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
        </View> */}

        {/* { hello ?
          <Text>Hello everybody</Text>
          :null
        } */}

        {/* <View>
          <Generate add={() => onAddRandom()}></Generate>
        </View>

        <ListItems 
          items={random} 
          remove={(pos) => onItemRemove(pos)}
        /> */}

        {/*<Inputs/>*/}

        {/* <ActivityIndicator animating={false}/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="small" color="#000fff"/> */}
      </ScrollView>
    </View>
  )
}

const styles =  StyleSheet.create({
    mainView:{
      flex:1,
      paddingTop:50, 
      backgroundColor:'#00ff00', 
      alignItems:'flex-start', // center X axis
      justifyContent:'flex-start', // center Y axis
    },
    basicView:{
      backgroundColor:'#ff00ff', 
      width:'100%', 
      marginBottom:5
    },
    basicText:{
      padding:10,
      color:'#ffffff', 
      fontSize:20,
      fontWeight:'700', 
      textAlign:'center'
    },
    mountains:{
      width:'100%',
      height:300,
      marginTop:20,
      backgroundColor:'#000'
    }
})


export default App;