import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: #0075E1;

  padding: 0 16px;
`;

export const ButtonText = styled.Text`
  font-family: 'Raleway-SemiBold ';
  font-size: 16px;
  color: #ffffff;
`;