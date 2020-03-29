import * as React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';

import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from './store';

const {store, persistor} = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View>
          <Text>App</Text>
        </View>
      </PersistGate>
    </Provider>
  );
}
