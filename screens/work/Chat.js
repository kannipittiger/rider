import { useState, useRef, useEffect } from "react";
import {
    View, Text, FlatList,
    StyleSheet, TextInput, TouchableOpacity,
    Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Chat = (props) => {
    const navigation = props.nav
    const route = props.route
    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={{ flex: 1, padding: 8 }}
        >
            <View style={styles.content}>
                <FlatList
                
                />
                <View style={styles.chatContent}>
                    <TextInput
                        placeholder="Message"
                        style={styles.textInput}
                    />
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="send-circle" size={40} color="#2A4602" />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 8,
        marginBottom: 8,
        width: "100%",
    },
    textDisplay: {
        flexWrap: 'wrap',
        fontSize: 20,
        borderRadius: 20,
        borderWidth: 1,
        padding: 8,
        flexShrink: 1,
    },
    txtReceiver: {
        borderColor: '#808180',
        color: '#000',
        backgroundColor: '#DADCD9',
    },
    txtSender: {
        borderColor: '#2A4602',
        color: '#fff',
        backgroundColor: '#8DAE6D',
    },
    chatContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#447706',
        marginTop: 16,
        marginBottom: '15%',
        marginLeft: 8,
        marginRight: 8

    },
    textInput: {
        height: 50,
        flex: 1,
        paddingStart: 20,
        fontSize: 16,
        color: '#000'
    },
})