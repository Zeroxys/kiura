import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Header from '../components/header/Index';
import Theme from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {profile} from '../assets/images/profile';
import {persistLoginAction} from '../redux/actions/loginActions'; // Importa la acción para cerrar sesión

const SettingsScreen: React.FC = () => {
  const {username, persistLogin} = useSelector(store => store.login);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(persistLoginAction(false));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Settings" />
      <View style={styles.container}>
        <SvgXml xml={profile} width={260} height={260} />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.greeting}>Hola, {username}!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.blue.base,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white.base,
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: Theme.colors.blue.base,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: Theme.colors.white.base,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
