import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatPrice } from '~/util/format';

import api from '~/services/api';

import {
  SafeArea,
  Container,
  Title,
  SubmitButton,
  Box,
  List,
  Header,
  HeaderTitle,
  HeaderList,
  DescriptionTitle,
  DescriptionList,
  DescriptionText,
  DescriptionValue,
  DescriptionIcon,
  Total,
  TitleTotal,
  ValueTotal,
} from './styles';

export default function Dashboard() {
  const [credit, setCredit] = useState([]);
  const [debits] = useState({
    debits: [
      {
        title: 'LICENCIAMENTO',
        date: '2020',
        value: 93.87,
      },
      {
        title: 'DPVAT',
        date: '2020',
        value: 5.23,
      },
      {
        title: 'ENTREGA',
        date: 'correio',
        value: 11.0,
      },
    ],
  });

  useEffect(() => {
    async function loadData() {
      const response = await api.get('consulta.json');

      const { installments } = response.data;
      setCredit(installments.credit);
    }
    loadData();
  }, []);

  const total = useMemo(() => {
    const values = debits.debits.map((x) => x.value);
    const price = values.reduce((a, b) => a + b);
    return formatPrice(price);
  }, [debits.debits]);

  return (
    <SafeArea>
      <Container>
        <Title>Débitos</Title>
        <Box>
          <Header>
            <HeaderTitle>DÉBITOS EM TEMPO REAL</HeaderTitle>
          </Header>
          {debits.debits.map((doc) => (
            <>
              <HeaderList>
                <DescriptionTitle>{doc.title}</DescriptionTitle>
              </HeaderList>
              <DescriptionList>
                <DescriptionIcon>
                  <Icon name="md-calendar" size={14} color="#525252" />
                  <DescriptionText>{doc.date}</DescriptionText>
                </DescriptionIcon>
                <DescriptionValue>{formatPrice(doc.value)}</DescriptionValue>
              </DescriptionList>
            </>
          ))}
          <Total>
            <TitleTotal>TOTAL</TitleTotal>
            <ValueTotal>{total}</ValueTotal>
          </Total>
        </Box>
        <Title>Você pode parcelar</Title>
        <Box>
          <Header>
            <HeaderTitle>
              SIMULAÇÃO DE PARCELAMENTO NO CARTÃO DE CRÉDITO
            </HeaderTitle>
          </Header>
          {credit.map((item, index) => (
            <List
              style={{
                backgroundColor: index % 2 === 0 ? '#F5F4F4' : '#fff',
              }}
            >
              <Text>
                {item.installments} x de R$ {formatPrice(item.amount)}
              </Text>
            </List>
          ))}
        </Box>
        <SubmitButton onPress={() => {}}>Regularize já</SubmitButton>
      </Container>
    </SafeArea>
  );
}

Dashboard.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 30 }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="ios-arrow-round-back" size={32} color="#C5CCD6" />
    </TouchableOpacity>
  ),
});
