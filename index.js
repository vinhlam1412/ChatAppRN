/**
 * @format
 */

import { Welcome, Login, Chat } from './screens/';
import { AppRegistry } from 'react-native';
import React from 'react';
import App from './navigation/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => () => <App />);
