import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import Theme from '../theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text} from 'react-native';
import RouteNames from '../utils/routeNames';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';

const tabBarStyle = {
  tabBarShowLabel: false,
  tabBarInactiveTintColor: Theme.colors.cyan,
  tabBarActiveTintColor: Theme.colors.cyan.base,
};

const Tab = createBottomTabNavigator();
const HomeBottomTabs = () => {
  const {cart} = useSelector(state => state.product);

  console.log(cart);

  const renderCartIcon = ({color, size}) => (
    <View>
      <Icon name="shopping-cart" color={color} size={size} />
      {cart.length > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart.length}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: Theme.colors.blue.base,
          tabBarActiveTintColor: Theme.colors.cyan.base,
          // tabBarStyle: tabBarStyle,
          ...styles.tabBar,
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          name={'HomeScreen'}
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: renderCartIcon,
          }}
          name={RouteNames.SCREEN_CART}
          component={CartScreen}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="gear" color={color} size={size} />
            ),
          }}
          name={RouteNames.SCREEN_SETTINGS}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'rgba(0, 0, 0, .2)',
    height: 80,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -12,
    backgroundColor: Theme.colors.green.base,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomeBottomTabs;
