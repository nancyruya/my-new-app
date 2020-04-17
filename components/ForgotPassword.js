import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      loadingVisible: false,
      validEmail: false,
      emailAddress: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  }

  goToNextStep() {
    this.setState({ loadingVisible: true });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}
      behavior="padding">
      <View style={styles.form}>
      <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
      <Text style={styles.forgotPasswordSubheading}> Enter your email to find your account: </Text>
      
       <TextInput 
      placeholder="EMAIL ADDRESS"
      style={styles.inputField}  
      />

      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#36485f',
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
  },
  forgotPasswordSubheading: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  inputField: {
    marginBottom: 30,
    textColor: '#fff'
  }
});
