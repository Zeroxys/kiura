import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/header/Index';
import Theme from '../theme';
import useApiFetch from '../utils/apiFetch';
import SearchComponent from '../components/search';
import CategoriesComponent from '../components/categories';
import ProductsListComponent from '../components/productList';

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

const HomeScreen: React.FC = () => {
  const [search, setSearchValue] = useState<string>('');
  const [searchedProduct, setSearchedProduct] = useState<Product[] | null>(
    null,
  );
  const {fetchApi} = useApiFetch();
  const [categories, setCategories] = useState<string[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<{
    [category: string]: Product[];
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search) {
      fetchProduct(search);
    } else {
      setSearchedProduct(null);
    }
  }, [search]);

  const fetchData = async () => {
    try {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse);
      setSelectedCategory('');
      const productsByCategoryResponse: {[category: string]: Product[]} = {};
      for (const category of categoriesResponse) {
        const productsResponse = await getProductsByCategory(category);
        productsByCategoryResponse[category] = productsResponse.products;
      }
      setProductsByCategory(productsByCategoryResponse);
    } catch (error) {
      console.error('Error data:', error);
    }
  };

  const getCategories = async (): Promise<string[]> => {
    try {
      const res = await fetchApi('GET', '/products/categories');
      return res;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  const getProductsByCategory = async (
    category: string,
  ): Promise<{products: Product[]}> => {
    try {
      const res = await fetchApi('GET', `/products/category/${category}`);
      return res;
    } catch (error) {
      console.error(`Error ${category}:`, error);
      return {products: []};
    }
  };

  const fetchProduct = async (searchQuery: string) => {
    try {
      const res = await fetchApi('GET', `/products/search?q=${searchQuery}`);
      setSearchedProduct(res.products);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Productos" />
      <View style={styles.container}>
        <SearchComponent
          value={search}
          onChangeText={(text: string) => setSearchValue(text)}
        />
        <CategoriesComponent
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
        />

        <ScrollView style={styles.productListContainer}>
          {searchedProduct && (
            <ProductsListComponent
              category={selectedCategory}
              title={`Resultados de búsqueda para "${search}"`}
              products={searchedProduct}
            />
          )}

          {selectedCategory ? (
            <ProductsListComponent
              category={selectedCategory}
              title={selectedCategory}
              products={productsByCategory[selectedCategory]}
            />
          ) : (
            categories.map((category, index) => (
              <ProductsListComponent
                key={index}
                category={category}
                title={category}
                products={productsByCategory[category]}
              />
            ))
          )}
        </ScrollView>
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
  productListContainer: {
    height: '80%',
    marginTop: 5,
  },
});

export default HomeScreen;
