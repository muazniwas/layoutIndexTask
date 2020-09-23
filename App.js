import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import UserInformation from './src/components/UserInformation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={"#086b8c"} />
      <Stack.Navigator>
        <Stack.Screen
          name="UserInformation"
          component={UserInformation}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const navigationOptions = {
  title: 'User Information',
  headerStyle: {
    backgroundColor: '#2f8dad',
  },
  headerTintColor: '#fff',
}