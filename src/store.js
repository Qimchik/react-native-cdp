import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import middlewareChain from './middlewares';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage,
};


/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(...middlewareChain)),
);

export const persistor = persistStore(store);
