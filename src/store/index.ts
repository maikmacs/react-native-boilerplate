import configureStore from './createStore';
import rootSaga from './sagas';
import rootReducer from './reducers';

export default () => configureStore(rootReducer, rootSaga);
