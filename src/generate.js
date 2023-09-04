import React from "react";
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableHighlight, 
    TouchableOpacity, 
    Pressable
} from 'react-native';


const Generate = ({add}) => (
    <Pressable 
        onPress={() => add()} 
    >
        <View style={styles.generate}>
            <Text style={{color:'#ffffff'}}>Add number</Text>
        </View>
    </Pressable>
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