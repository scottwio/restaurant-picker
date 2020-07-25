import React from 'react';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';
import {TestIDs} from '../../testing-utils/testIDs';

const ErrorMessage = () => {
  return (
    <Container style={styles.container} testID={TestIDs.Global.Error}>
      <Text.Body style={styles.text}>
        Sorry we could not get the restaurant data at this time
      </Text.Body>
    </Container>
  );
};

export default ErrorMessage;
