import styled, {css} from 'styled-components/native';
import Iconicons from 'react-native-vector-icons/Ionicons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}


export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 54px;
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: #0075E1;
  border-color: #FFFFFF;
  border-width:1px;
  flex-direction: row;
  align-items: center;

  ${props => props.isFocused && css`
    border-width: 4px;
    border-color:#93cdff;
  `}

  ${props => props.isErrored && css`
    border-width: 2px;
    border-color:#FF5F98;
  `}

`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFFFFF;
  font-family: 'OpenSans-Regular';
`;

export const Icon = styled(Iconicons)``;

export const ContainerInputPaper= styled.View`
  width: 100%;
  padding: 0 16px;
`;



