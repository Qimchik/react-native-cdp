import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import baseURLInjector from './baseURLInjector';

export default [
  baseURLInjector,
  apiMiddleware,
  thunk,
];
