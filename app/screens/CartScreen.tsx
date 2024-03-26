import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../components/header/Index';
import Theme from '../theme';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {emtpyCart} from '../assets/images/emptyCard';
import {
  addProductAction,
  cleanProductsAction,
  removeProductAction,
} from '../redux/actions/productActions';
import CartItem from '../components/cardItem';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

const CartScreen: React.FC = () => {
  const {cart} = useSelector(state => state.product);
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const updatedCartItems: Product[] = [];
    cart.forEach(cartProduct => {
      const existingCartItemIndex = updatedCartItems.findIndex(
        item => item.title === cartProduct.title,
      );
      if (existingCartItemIndex !== -1) {
        updatedCartItems[existingCartItemIndex].quantity += 1;
      } else {
        updatedCartItems.push({
          id: cartProduct.id,
          title: cartProduct.title,
          price: cartProduct.price,
          quantity: 1,
          thumbnail: cartProduct.thumbnail,
        });
      }
    });
    setCartItems(updatedCartItems);
  }, [cart]);

  const removeFromCart = (productId: number) => {
    const updateCart = cart.filter(product => {
      return product.id !== productId;
    });
    dispatch(removeProductAction(updateCart));
  };

  const incrementQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const renderItem = ({item}: {item: Product}) => (
    <CartItem
      item={item}
      removeFromCart={removeFromCart}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
    />
  );

  const decrementQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.quantity > 0
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const handleBuy = () => {
    Alert.alert(
      'Compra exitosa',
      'El proceso de compra ha sido concluido satisfactoriamente.',
      [
        {
          text: 'Aceptar',
          onPress: () => {
            dispatch(cleanProductsAction());
          },
        },
      ],
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
              <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
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
  totalContainer: {
    alignItems: 'center',
    marginBottom: 20,
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

export default CartScreen;
