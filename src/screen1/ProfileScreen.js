import React from 'react';
import {View, Text, Modal, Button} from 'react-native';
import styles from './styles';

class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  showModal = () => {
    this.setState({
      show: true,
    });
  };
  hideModal = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <View style={styles.slides}>
        <Text style={styles.heading}>Welcome To The Profile Screen...</Text>
        <View style={styles.container}>
          {/* <Text style={{fontSize: 40}}>Normal Text</Text> */}
          <Button title="show Modal" onPress={this.showModal} />
          <Modal visible={this.state.show} transparent={true}>
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
              <View
                style={{
                  margin: 30,
                  backgroundColor: '#ffffff',
                  flex: 1,
                  borderRadius: 10,
                  padding: 40,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  Modal Content
                </Text>
                <Button title="Hide Modal" onPress={this.hideModal} />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
export default ProfileScreen;
