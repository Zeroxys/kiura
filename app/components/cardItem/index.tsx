import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../../theme';

interface CartItemProps {
  item: Product;
  removeFromCart: (id: number) => void;
  decrementQuantity: (id: number) => void;
  incrementQuantity: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
}) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <Text>Cantidad: {item.quantity}</Text>
        </View>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
          <Icon name="minus" size={20} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
          <Icon name="plus" size={20} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.gray.light,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: Theme.colors.gray.dark,
    marginBottom: 5,
  },
  itemActions: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default CartItem;
