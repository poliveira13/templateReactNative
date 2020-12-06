import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Routes from './routes/auth.routes';

const App: React.FC = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  
  return (
 
  <NavigationContainer>
    <StatusBar barStyle="default" backgroundColor="#FFFFFF" />
    <Routes />
  </NavigationContainer>

  )
}


export default App;
