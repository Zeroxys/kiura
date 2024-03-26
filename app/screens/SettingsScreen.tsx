import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';
import Header from '../components/header/Index';
import Theme from '../theme';

const CartScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Settings" />
      <View style={styles.container}>
        <Text>Configuraciones</Text>
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
  },
});

export default CartScreen;
