import ProductListItem from "@/components/ProductListItem";
import { FlatList, View } from "react-native";
import products from '../assets/products.json';

export default function Index() {
  return (
    <View
    // style={{
    //   // flex: 1,
    //   // justifyContent: 'center',
    //   // alignItems: 'center',
    //   // margin:10,
    //   marginTop: 50
    // }}
    >
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerClassName="gap-2"
        columnWrapperClassName="gap-2"
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}