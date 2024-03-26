import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type ProductCardProps = {
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

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Text style={styles.discount}>Discount: {discountPercentage}%</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text style={styles.stock}>Stock: {stock}</Text>
      <Text style={styles.brand}>Brand: {brand}</Text>
      <Text style={styles.category}>Category: {category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  price: {
    marginBottom: 4,
  },
  discount: {
    marginBottom: 4,
  },
  rating: {
    marginBottom: 4,
  },
  stock: {
    marginBottom: 4,
  },
  brand: {
    marginBottom: 4,
  },
  category: {
    marginBottom: 4,
  },
});

export default ProductCard;
