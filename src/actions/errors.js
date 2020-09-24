import { GET_ERRORS } from '../utils/constants';

export const getErrors = (errorMsg) => ({
  type: GET_ERRORS,
  errorMsg
});
