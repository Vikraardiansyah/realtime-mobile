import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Maps from "./src/screens/Maps";
import Live from "./src/screens/Live"

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Live" component={Live} />
        <Screen name="Maps" component={Maps} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
