import { Platform } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Background = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const TextHeader = styled.Text`
  font-size: 26px;
  font-weight: 700;
  margin: 15px 0 45px 0;
`;

export const FormInput = styled.View`
  margin: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => (props.error ? '#F3534A' : '#e1e3e8')};
`;

export const NameInput = styled.Text`
  color: ${(props) => (props.error ? '#F3534A' : '#c5ccd6')};
`;

export const TextInput = styled.TextInput`
  height: 40px;
  margin: 5px 0;
`;

export const InputMask = styled(TextInputMask)`
  height: 40px;
  margin: 5px 0;
`;

export const SubmitButton = styled(Button)`
  margin: 15px 0;
`;
