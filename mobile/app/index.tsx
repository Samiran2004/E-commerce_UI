import ProductListItem from "@/components/ProductListItem";
import { FlatList, View } from "react-native";
import products from '../assets/products.json';

export default function Index() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}