import React, {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/colors';
import InputForm from '../components/InputForm';
import Button from '../components/Button';
import {loginThunk} from '../redux/auth/thunk';
import {updateLoginEmail, updateLoginPassword} from '../redux/auth/slice';
import {AppDispatch, RootState} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: RootState) => state.auth.email);
  const password = useSelector((state: RootState) => state.auth.password);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.helloText}>Olá,</Text>
        <Text style={styles.welcomeText}>Bem-vindo(a) ao Ton</Text>
      </View>
      <View style={styles.formContainer}>
        <InputForm
          value={email ? email : ''}
          style={styles.inputEmailForm}
          secureTextEntry={false}
          placeholder="E-mail"
          onChangeText={(value: string) => dispatch(updateLoginEmail(value))}
        />
        <InputForm
          value={password ? password : ''}
          style={styles.inputPasswordForm}
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={(value: string) => dispatch(updateLoginPassword(value))}
        />
        <Button
          text_style={styles.textButton}
          style={styles.loginButton}
          text={'Entrar'}
          onPress={() => dispatch(loginThunk())}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  textContainer: {
    paddingHorizontal: 60,
  },
  helloText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.BLACK,
  },
  welcomeText: {
    fontWeight: '400',
    fontSize: 20,
    color: Colors.BLACK,
  },
  formContainer: {
    paddingTop: 50,
    paddingHorizontal: 60,
  },
  loginButton: {
    backgroundColor: Colors.SECUNDARY,
    borderRadius: 10,
    paddingHorizontal: 60,
    height: 50,
    top: 50,
    justifyContent: 'center',
  },
  textButton: {
    color: Colors.BLACK,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputEmailForm: {
    paddingHorizontal: 20,
    height: 55,
    borderColor: Colors.GREY,
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inputPasswordForm: {
    paddingHorizontal: 20,
    height: 55,
    borderColor: Colors.GREY,
    borderWidth: 0.5,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
export default Login;
