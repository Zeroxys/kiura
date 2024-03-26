import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/header/Index';
import Theme from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SvgXml} from 'react-native-svg';
import {emtpyCart} from '../assets/images/emptyCard';

const CartScreen: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    {id: 1, title: 'Producto 1', price: 10, quantity: 1},
    {id: 2, title: 'Producto 2', price: 20, quantity: 2},
    {id: 3, title: 'Producto 3', price: 15, quantity: 3},
    {id: 4, title: 'Producto 1', price: 10, quantity: 1},
    {id: 5, title: 'Producto 2', price: 20, quantity: 2},
    {id: 6, title: 'Producto 3', price: 15, quantity: 3},
    {id: 7, title: 'Producto 1', price: 10, quantity: 1},
    {id: 8, title: 'Producto 2', price: 20, quantity: 2},
    {id: 9, title: 'Producto 3', price: 15, quantity: 3},
  ]);

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.cartItem}>
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Text>Cantidad: {item.quantity}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
        <Text>
          <Icon name="plus" size={20} color="green" />
        </Text>
      </TouchableOpacity>
    </View>
  );

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Carrito" />
      <View style={styles.container}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <SvgXml xml={emtpyCart} width={260} height={260} />
            <Text style={styles.emptyCartText}>¡Tu carrito está vacío!</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
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
    paddingHorizontal: 25,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    height: 80,
    borderBottomColor: Theme.colors.gray.light,
  },
  totalContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: Theme.colors.green.base,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: Theme.colors.white.base,
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export default CartScreen;
