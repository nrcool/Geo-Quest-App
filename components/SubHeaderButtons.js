import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function SubHeaderButtons(props) {

    const [mode, setMode] = useState(true)

    const switchMode = () => {
        setMode(!mode)
    }

    const [text, setText] = useState(false)
    togglePicker = () => {
        setText(!text)
    }

    return (
        <View style={styles.main}>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TouchableOpacity style={styles.btn}
                    onPress={switchMode}
                >
                    <Text style={{ fontSize: 17, color: 'white' }}>{mode ? 'Explore' : 'Play'}</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TouchableOpacity style={styles.btn}
                    onPress={togglePicker}
                >
                    <Text style={{ fontSize: 17, color: 'white' }}>Categories</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.2,
        paddingTop: 5,
    },
});