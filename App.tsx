import React from 'react';
import { Text, View } from 'react-native';


const App = () => {
  return (
    <View style={{marginTop:50}}>
      <View style={{backgroundColor:'red',width:'100%'}}>
        <Text>
          Hello 1
        </Text>
      </View>
      <View>
        <Text>
          Hello 2
        </Text>
      </View>
    </View>
  )
}


export default App;