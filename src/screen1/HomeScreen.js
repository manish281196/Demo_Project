/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {View, Text, Image} from 'react-native';
// import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screen1/AboutScreen';
import ProfileScreen from '../screen1/ProfileScreen';

class HomeScreen extends React.Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.fieldLabel}>
    //       Welcome To The Dummy Application...
    //     </Text>
    //   </View>
    // );
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/icons/about.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'tomato' : 'grey',
                  }}
                />
                <Text
                  style={{color: focused ? 'tomato' : 'grey', fontSize: 12}}>
                  About
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/icons/profile-user.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'tomato' : 'grey',
                  }}
                />
                <Text
                  style={{color: focused ? 'tomato' : 'grey', fontSize: 12}}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default HomeScreen;
