import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeBottomTabs from './HomeBottomTabs';
import RouteNames from '../utils/routeNames';
import ProductDetailScreen from '../screens/ProductDetailt';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  const userLogged = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userLogged ? (
          <Stack.Screen
            name={RouteNames.SCREEN_LOGIN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={RouteNames.SCREEN_HOME}
            component={HomeBottomTabs}
            options={{headerShown: false}}
          />
        )}

        <Stack.Screen
          name={RouteNames.SCREEN_DETAIL}
          component={ProductDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
