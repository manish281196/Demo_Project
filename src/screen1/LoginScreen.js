import React from 'react';
import {View, Text, TextInput, Button, StatusBar} from 'react-native';

import styles from './styles';

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      contact: '',
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }

  handleEmailEnter = e => {
    this.setState({name: e});
  };

  handleContactEnter = g => {
    this.setState({contact: g});
  };

  handlePasswordEnter = f => {
    this.setState({password: f});
  };

  handlePressButton = () => {
    alert(
      `Email is: ${this.state.name} Contact is : ${this.state.contact} Password is: ${this.state.password}`,
    );
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageHeading}>Login Module</Text>
        <Text style={styles.fieldLabel}>Email:</Text>
        <TextInput
          autoFocus
          style={styles.fieldInput}
          returnKeyType="next"
          placeholder="Enter the Email Here ..."
          onChangeText={this.handleEmailEnter}
          onSubmitEditing={() => {
            this.firstTextInput.focus();
          }}
          blurOnSubmit={false}
        />

        <Text style={styles.fieldLabel}>Contact:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.fieldInput}
          returnKeyType="next"
          placeholder="Enter the Contact Here ..."
          onChangeText={this.handleContactEnter}
          ref={input => {
            this.firstTextInput = input;
          }}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
          maxLength={10}
        />

        <Text style={styles.fieldLabel}>Password:</Text>
        <TextInput
          style={styles.fieldInput}
          placeholder="Enter the Password Here ..."
          returnKeyType="go"
          secureTextEntry={true}
          onChangeText={this.handlePasswordEnter}
          ref={input => {
            this.secondTextInput = input;
          }}
          blurOnSubmit={true}
        />
        <Button title="LogIn" onPress={this.handlePressButton} />
      </View>
    );
  }
}
export default LoginScreen;
