import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


const Inputs = () => {
    const [myinput,setMyinput] = useState('');
    const [names,setNames] = useState(['John','James','Ron','Lisa','Mike','George']);

    const onChangeInput = (event) => {
        setMyinput(event);
    }

    const onAddUser = () => {
        const newState = [...names, myinput];
        setNames(newState);
        setMyinput('');
    }

    return (
        <>
            <TextInput
                style={styles.input}
                value={myinput}
                onChangeText={(e) => onChangeInput(e) }
                multiline={true}
                maxLength={5}
                // keyboardType="number-pad"
                // placeholder="introdu un numar"
                // placeholderTextColor={"#ccff00"}
                returnKeyType="done"
            />
            <Button
                title="Add user"
                onPress={onAddUser}
            />
            <View>
                {names.map(name=>(
                    <Text 
                        style={styles.user}
                        key={name}
                    >
                        {name}
                    </Text>
                ))}
            </View>
        </>
    )
}

const styles =  StyleSheet.create({
    input:{
        width:'100%', 
        backgroundColor:'#f2f2f2', 
        marginTop:20, 
        padding:10, 
        fontSize:20
    }, 
    user:{
        fontSize:30,
        borderWidth:3, 
        borderColor:'#cecece',
        padding:10,
        marginBottom:10
    }
})

export default Inputs;