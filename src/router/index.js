import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CharacterDetail from '../screens/CharacterDetail';
import SplashPage from '../screens/Splash';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='CharacterDetail' component={CharacterDetail} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
