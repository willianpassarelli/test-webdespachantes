import styled from 'styled-components/native';
import Button from '~/components/Button';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Container = styled.ScrollView`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
  margin: 15px 30px;
`;

export const SubmitButton = styled(Button)`
  margin: 15px 30px;
`;

export const Box = styled.View`
  border-width: 1px;
  border-color: #000;
  margin: 0 15px;
`;

export const List = styled.View`
  margin: 0 15px;
  padding: 10px;
`;

export const Header = styled.View`
  margin: 15px 15px 0 15px;
  padding: 5px 0;
  background: #292a2b;
`;

export const HeaderTitle = styled.Text`
  color: #a6a8ab;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const HeaderList = styled.View`
  margin: 0 15px;
  padding: 5px 0;
  background: #686868;
`;

export const DescriptionTitle = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const DescriptionList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  padding: 5px 5px;
  background: #ccc;
  border-color: #686868;
  border-width: 1px;
  margin-bottom: 15px;
`;

export const DescriptionIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionText = styled.Text`
  color: #525252;
  font-weight: bold;
  margin-left: 5px;
`;

export const DescriptionValue = styled.Text`
  color: #525252;
  font-weight: bold;
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  padding: 5px 5px;
  background: #000;
  margin-bottom: 15px;
`;
export const TitleTotal = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ValueTotal = styled.Text`
  color: #fff;
  font-weight: bold;
`;
