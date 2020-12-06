import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Cadastro from '../pages/cadastro';
import RecSenha from '../pages/RecuperacaoSenha';


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Auth.Screen name="Login" component={Login} />    
      <Auth.Screen name="Cadastro" component={Cadastro} />
      <Auth.Screen name="RecSenha" component={RecSenha} />
    </Auth.Navigator>
  );
  
  export default AuthRoutes;

