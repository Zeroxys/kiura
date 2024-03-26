import React from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Theme from '../theme/index';
import {SvgXml} from 'react-native-svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native';
import {logoFurni} from '../assets/images/logoFurniPro';
import LoginAccount from '../components/login/Login';

const LoginScreen = () => {
  const handleInputBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          ...styles.container,
          width: '100%',
          borderColor: 'red',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableWithoutFeedback onPress={handleInputBlur}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <SvgXml xml={logoFurni} width={180} height={180} />
                  <Text style={styles.appTitle}>FurniPro</Text>
                </View>
                <View style={styles.containerLogin}>
                  <LoginAccount />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: Theme.colors.blue.base},
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white.base,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerLogin: {
    flexDirection: 'row',
    flex: 0.83,
    borderColor: 'yellow',
    backgroundColor: Theme.colors.white.base,
    alignItems: 'center',
    justifyContent: 'center',
  },

  featureText: {
    fontSize: 16,
    color: Theme.colors.blue.base,
    fontWeight: '500',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: Theme.colors.blue.base,
    fontSize: 16,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Theme.colors.blue.base,
  },
  description: {
    textAlign: 'auto',
    color: Theme.colors.blue.base,
    width: '90%',
    marginBottom: 10,
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#f0f0f0',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: Theme.colors.blue.base,
    padding: 16,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
    width: '90%',
  },
  featureList: {
    alignItems: 'flex-start',
    width: '100%',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 16,
    color: Theme.colors.blue.base,
    marginRight: 5,
  },
  customStyle: {
    justifyContent: 'center',
    borderWidth: 2,
    marginTop: 14,
    marginBottom: 7,
    width: 200,
  },
  customStyleProfile: {
    justifyContent: 'flex-start',
    borderWidth: 2,
    marginTop: 7,
    marginBottom: 7,
  },
});

export {styles};

export default LoginScreen;
