import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoginStack from './stacks';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LoginStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
