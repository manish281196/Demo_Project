import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc2c2',
  },
  slides: {
    flex: 1,
    backgroundColor: '#ffc2c2',
  },
  pageHeading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  fieldLabel: {
    marginLeft: 20,
  },
  fieldInput: {
    height: 50,
    width: 300,
    backgroundColor: '#d3d3d3',
    color: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  img: {
    height: 150,
    width: 350,
    margin: 15,
    padding: 5,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 20,
  },
  heading: {
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default styles;
