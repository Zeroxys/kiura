import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import LoginStack from './stacks';

function App(): React.JSX.Element {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return <LoginStack/>;
}

export default App;
