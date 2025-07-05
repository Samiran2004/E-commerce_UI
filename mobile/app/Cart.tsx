import { View, Text } from 'react-native'
import React from 'react'

export default function Cart() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text style={{ fontSize: 30, color: 'red' }}>Cart Screen</Text>
        </View>
    )
}