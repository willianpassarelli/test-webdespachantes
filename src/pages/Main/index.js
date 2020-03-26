import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { consultRequest } from '~/store/modules/consult/actions';

import {
  Container,
  TextHeader,
  FormInput,
  NameInput,
  TextInput,
  SubmitButton,
  Background,
  InputMask,
} from './styles';

export default function Main() {
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.consult);

  const [renavam, setRenavam] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(consultRequest(renavam, password));
    Keyboard.dismiss();
  }

  return (
    <Background>
      <Container>
        <TextHeader>Consulte seus débitos</TextHeader>

        <FormInput error={error}>
          <NameInput error={error}>Renavam</NameInput>
          <TextInput
            value={renavam}
            maxLength={11}
            keyboardType="numeric"
            onChangeText={setRenavam}
          />
        </FormInput>

        <FormInput error={error}>
          <NameInput error={error}>Password</NameInput>
          <InputMask
            keyboardType="numeric"
            value={password}
            onChangeText={(formatted) => setPassword(formatted)}
            mask="[00000]-[000]"
          />
        </FormInput>

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Consultar débitos
        </SubmitButton>
      </Container>
    </Background>
  );
}
