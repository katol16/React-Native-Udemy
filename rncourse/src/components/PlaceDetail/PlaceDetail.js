import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                    style={styles.placeImage}
                    source={props.selectedPlace.image}
                />
                <Text
                    style={styles.placeName}
                >
                    {props.selectedPlace.name}
                </Text>
            </View>
        )
    }
    return (
        <Modal
            onRequestClose={props.onModalClose}
            visible={props.selectedPlace !== null}
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View style={styles.deleteButton}>
                    {/*<Button*/}
                    {/*    title="Delete"*/}
                    {/*    color="red"*/}
                    {/*    onPress={props.onItemDeleted}*/}
                    {/*/>*/}
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        <View>
                            <Icon
                                name="ios-trash"
                                color="red"
                                size={30}
                            />
                        </View>
                    </TouchableOpacity>
                    <Button
                        title="Close"
                        onPress={props.onModalClose}
                    />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
});

export default placeDetail;