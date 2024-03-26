import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/header/Index';
import Theme from '../theme';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type ProductDetailRouteParams = {
  ProductDetail: {
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
  };
};

const ProductDetailScreen: React.FC<{
  route: RouteProp<ProductDetailRouteParams, 'ProductDetail'>;
}> = ({route}) => {
  const {title, description, price, brand, thumbnail} = route.params;
  const maxTitleLength = 20;

  const truncatedTitle =
    title.length > maxTitleLength
      ? title.substring(0, maxTitleLength) + '...'
      : title;

  const handleAddToCart = () => {
    //TODO ADD REDUX
    console.log('REDUX');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={truncatedTitle} back />
      <View style={styles.container}>
        <View style={styles.productInfo}>
          <Image source={{uri: thumbnail}} style={styles.thumbnail} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>Precio: ${price}</Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Añadir al carrito</Text>
          <Icon name="cart-plus" size={20} color={Theme.colors.white.base} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.blue.base,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white.base,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  productInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  thumbnail: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.colors.black.base,
    textAlign: 'center',
  },
  brand: {
    marginTop: 5,
    color: Theme.colors.black.base,
    textAlign: 'center',
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
    color: Theme.colors.gray.base,
  },
  price: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: Theme.colors.green.base,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  addToCartButtonText: {
    color: Theme.colors.white.base,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default ProductDetailScreen;
