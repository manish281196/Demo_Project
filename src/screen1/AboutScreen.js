import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.slides}>
        <Text style={styles.heading}>Welcome To The About Screen...</Text>
        <ScrollView horizontal={true}>
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/icons/about.png')}
            resizeMode="contain"
            style={styles.img}
          />
        </ScrollView>
      </View>
    );
  }
}
export default AboutScreen;
