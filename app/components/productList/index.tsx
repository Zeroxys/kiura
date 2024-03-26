import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Theme from '../../theme';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface ProductsListComponentProps {
  category: string;
  title: string;
  products: Product[];
}

const ProductsListComponent: React.FC<ProductsListComponentProps> = ({
  category,
  title,
  products,
}) => {
  const filteredProducts = category
    ? products?.filter(product => product.category === category)
    : products;

  return (
    <View style={{marginBottom: 50}}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          {filteredProducts === undefined ? (
            <ActivityIndicator color={Theme.colors.cyan.base} />
          ) : (
            filteredProducts?.map((product, index) => (
              <TouchableOpacity key={index} style={styles.productCard}>
                <Image
                  source={{uri: product.thumbnail}}
                  style={styles.productImage}
                />
                <Text>{product.title}</Text>
                <Text>{product.price}</Text>
                <Text>Rating: {product.rating}</Text>
                <Text>Stock: {product.stock}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  categoryTitle: {
    color: Theme.colors.cyan.base,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  productCard: {
    borderWidth: 1,
    borderColor: Theme.colors.cyan.base,
    borderRadius: 8,
    padding: 16,
    margin: 5,
    width: 200,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default ProductsListComponent;
