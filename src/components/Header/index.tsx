import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Title, Icon, Border} from './styles';


interface HeaderProps {
  icon?: string;
}

const Header: React.FC<HeaderProps> = ({children, icon, ...rest}) => {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Icon name={icon} size={22} color="#0075E1" onPress={() => {
          navigation.goBack();
        }}  />
      <Title>{children}</Title>
    </Container>
    <Border/>
    </>
    )

};




export default HeaderSimple;
