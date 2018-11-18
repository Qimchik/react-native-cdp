import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import NavigatorService from './src/utils/navigator';
import AppNavigator from './src/navigation';
import { persistor, store } from './src/store';

import { View, Text, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator
            onNavigationStateChange={()=>{}}
    uriPrefix="/app"
          />
        </PersistGate>
      </Provider>
    )
  }
}
