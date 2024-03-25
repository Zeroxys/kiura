import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView>  
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text style={{fontWeight:'bold',fontFamily:'LeagueSpartan-VariableFont_wght'}}>Hola mundo</Text>
      <Icon name="cog" color={'red'} size={12} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
