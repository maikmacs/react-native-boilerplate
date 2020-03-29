import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {name as appName} from '../../app.json';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['nav'],
};

export default (rootReducer, rootSaga) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);
  //persistor.purge();

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
