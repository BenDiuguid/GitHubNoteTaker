import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Main from './App/Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class GitHubNoteTaker extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'GitHub NoteTaker',
          component: Main
        }}
        style={styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('GitHubNoteTaker', () => GitHubNoteTaker);
