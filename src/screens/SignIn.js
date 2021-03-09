import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../redax/auth/actions';
import {Spinner} from '../components/index';
import {AUTH} from './constants';
import {sign} from '../../assets/link/image';

const SignIn = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Spinner visible />;
  }

  const dispatch = useDispatch();

  const ComeIn = () => {
    if (login === 'dimka' && password === '12345') {
      setLoading(true);
      setTimeout(() => {
        dispatch(signIn());
        setLoading(false);
      }, 500);
    } else if (login === '' || password === '') {
      Alert.alert('Логин и пароль не могут быть пустыми');
    } else {
      Alert.alert('Не верно указан логин или пароль');
    }
  };

  const GitHub = () => navigation.navigate(AUTH);

  return (
    <View style={styles.main}>
      <ImageBackground source={sign} style={styles.image}>
        <View style={styles.block}>
          <Text style={styles.textHeader}> Вход на сайт </Text>
          <View style={styles.headerGit}>
            <Text>Войдите с помощью GitHub</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchGitHub}
              onPress={GitHub}>
              <Text style={styles.textGitHub}> GitHub </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <Text style={styles.textInput}> Введите логин: </Text>
            <TextInput
              style={styles.input}
              placeholder="Введите логин..."
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setLogin}
              value={login}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.textInput}> Введите пароль: </Text>
            <TextInput
              style={styles.input}
              placeholder="Введите пароль..."
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.touchable}
            onPress={ComeIn}>
            <Text style={styles.text}> Отправить </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  block: {
    alignItems: 'center',
    paddingTop: 230,
  },
  input: {
    width: 300,
    padding: 7,
    backgroundColor: 'white',
    marginTop: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 30,
    width: 300,
    backgroundColor: '#87ceeb',
    borderRadius: 10,
    marginTop: 10,
  },
  form: {
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textInput: {
    fontSize: 20,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: -10,
    paddingBottom: 340,
  },
  touchGitHub: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 30,
    width: 80,
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 10,
  },
  textGitHub: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  headerGit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default SignIn;
