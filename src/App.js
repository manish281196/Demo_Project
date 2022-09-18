import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './navigator/StackNavigator';
// import MyTab from './navigator/TabNavigator';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
        {/* <MyTab /> */}
      </NavigationContainer>
    );
  }
}

export default App;
