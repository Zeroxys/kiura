import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Theme from '../theme/index'
import Icon from 'react-native-vector-icons/FontAwesome'
import {StyleSheet, View} from 'react-native'
import RouteNames from '../utils/routeNames'
import {useNavigation} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'

const tabBarStyle = {
  tabBarShowLabel: false,
  tabBarInactiveTintColor: Theme.colors.cyan,
  tabBarActiveTintColor: Theme.colors.cyan.base,
}

const Tab = createBottomTabNavigator()
const HomeBottomTabs = () => {
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={RouteNames.SCREEN_SETTINGS}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: Theme.colors.blue.base,
          tabBarActiveTintColor: Theme.colors.cyan.base,
          tabBarStyle: tabBarStyle,
          ...styles.tabBar,
        }}>

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          name={RouteNames.SCREEN_HOME}
          component={HomeScreen}
        />
      </Tab.Navigator>
    </View>
  )
}

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
})

export default HomeBottomTabs
