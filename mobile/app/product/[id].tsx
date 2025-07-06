import { Product } from '@/components/ProductListItem';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import products from '../../assets/products.json';

export default function Details() {
    const { id } = useLocalSearchParams();
    const product: Product | undefined = products.find((p) => String(p.id) === String(id));

    if (!product || product === undefined) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
                <Ionicons name="alert-circle-outline" size={48} color="#ccc" />
                <Text style={{ fontSize: 18, marginTop: 8, fontWeight: '600', color: '#555' }}>
                    Product Not Found
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                    <ActivityIndicator size="small" color="#999" />
                    <Text style={{ marginLeft: 8, fontSize: 16, color: '#777' }}>
                        Please wait...
                    </Text>
                </View>
            </View>
        );
    }
    return (
        <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
            // margin: 10,
            marginTop: 10
        }}>
            <Card className="p-5 rounded-lg max-w-[360px] m-3">
                <Image
                    source={{
                        uri: product.image,
                    }}
                    className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                    alt="image"
                    resizeMode='contain'
                />
                <VStack className="mb-6">
                    <Heading size="md" className="mb-4">
                        {product.name}
                    </Heading>
                    <Text size="sm">
                        {product.description}
                    </Text>
                </VStack>
                <Box className="flex-col sm:flex-row">
                    <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
                        <ButtonText size="sm">Add to cart</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        className="px-4 py-2 border-outline-300 sm:flex-1"
                    >
                        <ButtonText size="sm" className="text-typography-600">
                            Wishlist
                        </ButtonText>
                    </Button>
                </Box>
            </Card>
        </View>
    )
}