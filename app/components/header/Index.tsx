import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, StyleProp, ViewStyle } from 'react-native';
import Theme from '../../theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type HeaderProps = {
  back?: boolean;
  title: string;
};

const Header: React.FC<HeaderProps> = ({ back = false, title }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const goToBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={Theme.colors.blue.base} />
      <View style={styles.mainContainer}>
        {back && (
          <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={goToBack}>
            <Icon
              name="chevron-left"
              size={24}
              color={Theme.colors.white.base}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: Theme.colors.white.base, height: 60 },
  icon: {
    marginRight: 0,
  },
  mainContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Theme.colors.blue.base,
    position: 'relative',
  },
  title: {
    color: Theme.colors.white.base,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default Header;
