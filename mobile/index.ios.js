var Main = require('./App/Components/Main');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111111',
  }
});

AppRegistry.registerComponent('mobile', () => githubNotetaker);
