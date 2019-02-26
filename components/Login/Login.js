import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/fastfood.png')} style={styles.logo} />
          <Text style={styles.header}>An app made using React Native</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f7fd3',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  formContainer: {

  },
  header: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10
  },
  logo: {
    width: 60,
    height: 60
  }
});
