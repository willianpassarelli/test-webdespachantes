import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { consultSuccess, consultFailure } from './actions';

import api from '~/services/api';
import NavigationService from '~/services/navigation';

export function* consult({ payload }) {
  try {
    const { renavam, password } = payload;

    const response = yield call(api.get, 'consulta.json');

    const {
      debits: {
        vehicle: { details },
      },
    } = response.data;

    if (details.renavam !== renavam) {
      throw new Error('Renavam não identificado');
    }

    NavigationService.navigate('Dashboard');
    yield put(consultSuccess());
  } catch (err) {
    Alert.alert('Falha na consulta', err.message);
    yield put(consultFailure());
  }
}

export default all([takeLatest('@consult/CONSULT_REQUEST', consult)]);
