import { View, Text } from 'react-native'
import React from 'react'

export default function ProductListItem({ product }: { product: Product }) {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{product.name}</Text>
        </View>
    )
}

type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number
};