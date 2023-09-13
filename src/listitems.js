import React from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';


const ListItems = ({items,remove}) => {
    return (
        items.map((item,i) => (
            <Pressable 
                key={item}
                style={{width:"100%"}}
                onPress={() => remove(i)} 
                // onLongPress={() => alert('long pressed list')} 
                // delayLongPress={2000}
                // onPressIn={() => alert('press in list')} 
                // onPressOut={() => alert('press out list')} 
            >
                <View 
                    style={styles.listitem}
                >
                    <Text>{item}</Text>
                </View>
            </Pressable>
            
        ))
    )
}

const styles =  StyleSheet.create({
    listitem:{
        backgroundColor:'#cecece', 
        alignItems:'center', // center X axis
        padding:10, 
        padding:10,
        marginTop:5,
        width:'100%'
    }
})

export default ListItems;