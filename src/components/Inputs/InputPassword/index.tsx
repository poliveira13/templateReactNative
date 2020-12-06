import React, {useEffect, useRef, useImperativeHandle, forwardRef} from 'react';
import {TextInputProps} from 'react-native';
import {TextInput} from 'react-native-paper';

import Iconicons from 'react-native-vector-icons/Ionicons';

import {useField} from '@unform/core';

import {StyleSheet} from 'react-native';

import {ContainerInputPaper,Icon }from '../styles';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  render?: Element;
}
interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const InputPaperPassword: React.ForwardRefRenderFunction<InputRef,InputProps> = ({name,...rest},ref) => {
  const {registerField, defaultValue= '',fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});
  const inputElementRef = useRef<any>(null);

  const [visible, setVisibility] = React.useState(false);

  const nameIcon = !visible ? 'md-eye-off-sharp' : 'md-eye-sharp';

  useImperativeHandle(ref, ()=> ({
    focus(){
      inputElementRef.current.focus();
    }
  }));

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref:any, value:string){
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value})
      },
      clearValue(){
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },

    });

  }, [fieldName, registerField]);


  return (
    <ContainerInputPaper>
      <TextInput   error={!!error}  ref={inputElementRef} defaultValue={defaultValue} onChangeText={(value) => { inputValueRef.current.value = value}} style={Input.TextInput} {...rest} mode="outlined"  />
      <Icon name={nameIcon} size={19} color="#0075E1" onPress={() => setVisibility(!visible)} />
    </ContainerInputPaper>
  );
};

const Input = StyleSheet.create({
  TextInput: {
    height: 50,
    marginBottom: 8,
  },
});

export default forwardRef(InputPaperPassword);
