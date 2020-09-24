import { GET_ERRORS } from '../utils/constants';

const errorsReducer = (state = '', action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.errorMsg;
    default:
      return state;
  }
};

export default errorsReducer;
