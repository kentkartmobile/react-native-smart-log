# React-Native-Master-Log

[![N|Master-Log](http://icons.iconarchive.com/icons/rokey/popo-emotions/icons-390.jpg)](https://github.com/kubilaytural)

Keep a close eye on your code with React-Native-Master-Log.
This is a barebones reliable everyday logging library. It does not do fancy things, it does not let you reconfigure appenders or add complex log filtering rules or boil tea (more's the pity), but it does have the all core functionality that you actually use:

### Log Type:
  - Type some Markdown on the left
  - See HTML in the right
  - Magic

### Installation

```sh
$ npm install react-native-master-log
$ NODE_ENV=production node app
```

## Usage

```sh
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import kk from 'react-native-smart-log';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentDidMount() {
    kk.log('custom log','My custom log');
    kk.log('info','information log');
    kk.log('warn','warning log');
    kk.log('error','error log');
    kk.log('response','response log');
    kk.log('','null-title-log');
    kk.log('single-parameter');

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}


```

### How can I contact with you?

E-mail me for any questions! kubilaytural@outlook.com
