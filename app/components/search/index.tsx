import React from 'react';
import {StyleSheet} from 'react-native';
import CustomInput from '../customInput';
import Theme from '../../theme';

interface SearchComponentProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <CustomInput
      icon={'search'}
      style={styles.input}
      placeholder={'Buscar artículos'}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Theme.colors.cyan.base,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
