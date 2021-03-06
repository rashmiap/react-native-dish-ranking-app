import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput style={styles.input} placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry
         placeholderTextColor="rgba(255,255,255,0.7)"
         returnKeyType="go"
         ref={(input) => this.passwordInput = input}
         />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: '#014d7d'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
});
