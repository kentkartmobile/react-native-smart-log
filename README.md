# react native master-log

[![N|Master-Log](http://icons.iconarchive.com/icons/rokey/popo-emotions/icons-390.jpg)](https://github.com/kubilaytural)

##### Cross Platform [React Native](https://facebook.github.io/react-native) - Code Log

Keep a close eye on your code with [React-Native-Master-Log](https://github.com/kubilaytural/react-native-smart-log).
This is a barebones reliable everyday logging library. It does not do fancy things, it does not let you reconfigure appenders or add complex log filtering rules or boil tea (more's the pity), but it does have the all core functionality that you actually use:

[![N|Master-Log](https://i.hizliresim.com/pG1jjz.png)](https://github.com/kubilaytural)

# Get Started
### Installation
```sh
$ npm install react-native-smart-log
```

### Import
```sh
$ import kk from 'react-native-smart-log';
```

### Usage
```sh
kk.setFilter('data');
kk.setLogType('resp');
kk.info('hi info', 'information Text');
kk.warn('hi warn', 'warning Text');
kk.error('hi error', 'error Text');
kk.resp('hi response', 'response Object Data');
```

### Log Types

kk.setLogType(logType)
| Log Types | Description |
| ------ | ------ |
| log | General log |
| info | Information logs|
| warn | Warning logs |
| error | Error logs |
| resp | Response logs|

### setFilter

Filter your keywords with this feature. Just see what you want. Recommended for clean code.

```sh
kk.setFilter('data');
```



#### How can I contact with you?

E-mail me for any questions! kubilaytural@outlook.com

