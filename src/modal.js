import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Modal } from 'react-native';


const ModalComponent = () => {
    const [modal,setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    return(
        <View>
            <Modal
                visible={modal}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>My modal component</Text>
                        <Button
                            color='#2196F3'
                            title="close it"
                            onPress={handleModal}
                        />
                    </View>
                </View>
            </Modal>
            <Button 
                color='#2196F3'
                onPress={handleModal}
                title="Open modal"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'yellow',
      borderRadius: 20,
      padding: 50,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
      color: 'F194FF'
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default ModalComponent;