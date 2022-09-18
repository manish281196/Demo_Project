import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffc2c2',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          Login Module
        </Text>
        <Text style={{marginLeft: 20}}>Email:</Text>
        <TextInput
          style={{
            height: 50,
            width: 300,
            backgroundColor: '#d3d3d3',
            color: 'black',
            margin: 10,
            padding: 10,
            borderRadius: 20,
          }}
          placeholder="Enter the Email Here ..."
          onChangeText={e => {
            this.setState({name: e});
          }}
        />

        <Text style={{marginLeft: 20}}>Password:</Text>
        <TextInput
          style={{
            height: 50,
            width: 300,
            backgroundColor: '#d3d3d3',
            color: 'black',
            margin: 10,
            padding: 10,
            borderRadius: 20,
          }}
          placeholder="Enter the Password Here ..."
          onChangeText={f => {
            this.setState({password: f});
          }}
        />
        <Button
          title="LogIn"
          onPress={() => {
            alert(
              'Email is : ' +
                this.state.name +
                ' ' +
                'Password is : ' +
                this.state.password,
            );
          }}
        />
      </View>
    );
  }
}
export default App;
