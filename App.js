import React from 'react'
import { registerRootComponent } from 'expo';
import { LogBox, Text } from 'react-native'
import 'react-native-gesture-handler'
import Router from './src/router'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

LogBox.ignoreAllLogs()

const App = () => <Router />
registerRootComponent(App);
export default App
