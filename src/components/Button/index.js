import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Background, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      <Background colors={['#0AC4BA', '#2BDA8E']}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text>{children}</Text>
        )}
      </Background>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
