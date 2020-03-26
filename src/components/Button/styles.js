import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.TouchableOpacity``;

export const Background = styled(LinearGradient)`
  height: 48px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;
