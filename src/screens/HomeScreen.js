/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <Button title="Profile Screen" onPress={this.handlePress} />
      </View>
    );
  }
}
