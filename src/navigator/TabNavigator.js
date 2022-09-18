/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screen1/AboutScreen';
import ProfileScreen from '../screen1/ProfileScreen';

const Tab = createBottomTabNavigator();
export default function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
