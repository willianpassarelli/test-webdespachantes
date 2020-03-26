export function consultRequest(renavam, password) {
  return {
    type: '@consult/CONSULT_REQUEST',
    payload: { renavam, password },
  };
}

export function consultSuccess() {
  return {
    type: '@consult/CONSULT_SUCCESS',
  };
}

export function consultFailure() {
  return {
    type: '@consult/CONSULT_FAILURE',
  };
}
