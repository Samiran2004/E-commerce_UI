import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Image } from "@/components/ui/image"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import React from 'react'

export default function ProductListItem({ product }: { product: Product }) {
    return (
        <Card className="p-5 rounded-lg max-w-[360px] flex-1">
            <Image
                source={{
                    uri: product.image,
                }}
                className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                alt={`${product.name} image`}
                resizeMode='contain'
            />
            <Text className="text-sm font-normal mb-2 text-typography-700">
                Fashion Clothing
            </Text>
            <VStack className="mb-6">
                <Heading size="md" className="mb-4">
                    {product.name}
                </Heading>
                <Text size="sm">
                    {product.description}
                </Text>
                <Text size="lg">
                    Price: ${product.price}
                </Text>
            </VStack>

        </Card>
    )
}

type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number
};