import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../../theme/index';
import {ActivityIndicator} from 'react-native';
import CustomInput from '../customInput';
import {useDispatch} from 'react-redux';
import {
  persistLoginAction,
  setUsernameAction,
} from '../../redux/actions/loginActions';

const LoginAccount = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    if (username.length > 0) {
      dispatch(persistLoginAction(true));
      dispatch(setUsernameAction(username));
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <CustomInput
        icon={'user'}
        placeholder={'Nombre de usuario'}
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <View style={styles.inputWrapper}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            style={{width: 30}}
            name={showPassword ? 'lock' : 'unlock'}
            size={20}
            color={Theme.colors.blue.base}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={showPassword}
          placeholderTextColor={Theme.colors.blue.base}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          {false ? (
            <ActivityIndicator size="small" color={Theme.colors.white.base} />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: Theme.colors.blue.base,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 2, height: 2},
    textAlign: 'center',
  },
  inputContainer: {
    width: '90%',
    height: 300,
    borderWidth: 1.6,
    justifyContent: 'center',
    borderColor: Theme.colors.blue.base,
    borderRadius: 10,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 5,
  },
  forgotPassword: {
    flexDirection: 'row',
  },
  forgotPasswordText: {
    color: Theme.colors.blue.base,
    fontSize: 16,
    marginLeft: 10,
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    color: Theme.colors.blue.base,
    textAlign: 'center',
  },
  createAccountText: {
    color: Theme.colors.blue.base,
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderBottomColor: Theme.colors.blue.base,
    color: Theme.colors.blue.base,
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    borderRadius: 20,
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
  loginButton: {
    backgroundColor: Theme.colors.blue.base,
    padding: 10,
    borderRadius: 80,
    alignItems: 'center',
  },
  loginButtonText: {
    color: Theme.colors.white.base,
    fontWeight: 'bold',
    fontSize: 18,
  },
  rememberMe: {
    marginLeft: 10,
    color: Theme.colors.blue.base,
    marginRight: 10,
  },
});

export default LoginAccount;
