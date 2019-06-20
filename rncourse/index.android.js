/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

// Poniżej oczeukjemy w tym meijscu () => App, że App, będzie funkcją która zwróci JSX
// Dlatego nasz RNRedux jest funkcja, która zwraca JSX
AppRegistry.registerComponent(appName, () => RNRedux);
