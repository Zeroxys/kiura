import React from 'react';
import {View, StyleSheet, TextInput, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../../theme/index';

interface CustomInputProps extends TextInputProps {
  icon: string;
  iconColor?: string;
  inputStyle?: object;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  iconColor = Theme.colors.blue.base,
  inputStyle = {},
  placeholder,
  value,
  onChangeText,
}) => {

  return (
    <View style={styles.inputWrapper}>
      <Icon style={{width: 30}} name={icon} size={20} color={iconColor} />
      <TextInput
        style={{...styles.input, ...inputStyle}}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={Theme.colors.blue.base}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderBottomColor: Theme.colors.blue.base,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Theme.colors.blue.base,
    borderRadius: 20,
  },
});

export default CustomInput;
