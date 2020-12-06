import React, {useEffect, useCallback ,useRef, useState,useImperativeHandle, forwardRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, TextInput, Icon} from '../styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const InputText: React.ForwardRefRenderFunction<InputRef,InputProps> = ({name, icon,...rest}, ref) => {
  const {registerField, defaultValue= '',fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(()=>{
    setIsFocused(true);
  },[]);

  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);

    setIsFilled(!!inputElementRef.current.value);
  },[]);

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

    })
  }, [fieldName, registerField]);

  return(
    <Container isFocused={isFocused} isErrored={!!error}>
    <TextInput onFocus={handleInputFocus} onBlur={handleInputBlur} placeholderTextColor="#FFFFFF" ref={inputElementRef} defaultValue={defaultValue} onChangeText={(value) => { inputValueRef.current.value = value}} {...rest} />
    <Icon name={icon} size={19} color="#FFFFFF"/>
  </Container>
  )
}


export default forwardRef(InputText);
