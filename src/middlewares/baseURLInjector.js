import { CALL_API } from 'redux-api-middleware';

export default () => next => (action) => {
  const callApi = action[CALL_API];

  if (callApi) {
    callApi.endpoint = 'http://192.168.1.101:3001' + callApi.endpoint;;
  }

  return next(action);
};
