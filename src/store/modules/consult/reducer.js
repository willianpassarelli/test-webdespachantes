import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  error: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@consult/CONSULT_REQUEST': {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case '@consult/CONSULT_SUCCESS': {
        draft.loading = false;
        draft.error = false;
        break;
      }
      case '@consult/CONSULT_FAILURE': {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
