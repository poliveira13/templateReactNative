import styled from 'styled-components/native';
import Iconicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;
  height: 75px;
  background: #FFFFFF;
  flex-direction: row;
  align-items: center;

`;

export const Border = styled.View`
  width:90%;
  border-bottom-color: #0075E1;
  border-bottom-width: 3px;
  margin: 0 16px;
`;

export const Title = styled.Text`
  position:absolute;
  left: 26%;
  font-family: 'Raleway-SemiBold';
  font-size: 22px;
  color: #0075E1;
`;

export const Icon = styled(Iconicons)`
  margin: 14px;
`;

export const Search = styled(Iconicons)`
  margin: 14px;
`;

export const InputSearch = styled.TextInput`
  flex:1;
  background: white;
  border-radius: 14px;
  height: 48px;
`;

export const DrawerIcon = styled(Iconicons)`
  margin: 14px;

`;
