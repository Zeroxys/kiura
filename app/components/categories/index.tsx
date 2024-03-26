import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Theme from '../../theme';

interface CategoriesComponentProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoriesComponent: React.FC<CategoriesComponentProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[
          styles.categoryButton,
          selectedCategory === ''
            ? styles.selectedCategory
            : styles.unselectedCategory,
        ]}
        onPress={() => onSelect('')}>
        <Text
          style={[
            styles.categoryButtonText,
            selectedCategory === '' && styles.selectedText,
          ]}>
          Todos
        </Text>
      </TouchableOpacity>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryButton,
            selectedCategory === category
              ? styles.selectedCategory
              : styles.unselectedCategory,
          ]}
          onPress={() => onSelect(category)}>
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === category && styles.selectedText,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Theme.colors.green.base,
  },
  categoryButtonText: {
    color: Theme.colors.green.base,
    fontWeight: 'bold',
  },
  selectedText: {
    color: Theme.colors.white.base,
  },
  selectedCategory: {
    backgroundColor: Theme.colors.green.base,
    borderColor: Theme.colors.green.base,
  },
  unselectedCategory: {
    borderColor: Theme.colors.green.base,
  },
});

export default CategoriesComponent;
