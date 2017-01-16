/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MySence from './components/mysence';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'mysence sfsfsff', index: 0}}
        renderScene={(route, navigator) =>
          <MySence
            title={route.title}
            onForward={()=>{
              const nextIndex = route.index + 1;
              navigator.push({
                index: nextIndex,
                title: 'Scene ' + nextIndex
              })
            }}
            onBack={()=>{
              if (route.index > 0) {
                navigator.pop()
              }
            }}
          />
        }
        />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
