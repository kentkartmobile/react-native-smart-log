import config from './config';

/*
  Log Types:
    1) info
    2) warn
    3) error
    4) response
    5) all
*/

let color = '';

export default {
  log: (inputTitle, inputMessage) => {
    if (!inputTitle) {
      inputTitle = 'all';
    }
    if (inputTitle && !inputMessage) {
      title = inputTitle;
      inputTitle = 'all';
      inputMessage = title;
    }

    if (config.logType === inputTitle || config.logType === 'all') {
      switch (inputTitle) {
        case 'info':
          color = '#01B80D';
          break;
        case 'warn':
          color = '#ff9966';
          break;
        case 'error':
          color = '#cc3300';
          break;
        case 'response':
          color = '#1A81F3';
          break;
        case 'all':
          color = '#222222';
          break;
        default:
          color = '#222222';
      }

      var styles = [
        `color: ${color}`
        , 'display: block'
        , 'line-height: 20px'
        , 'text-align: center'
        , 'font-weight: bold'
      ].join(';');

      console.log(`%c${inputTitle.toUpperCase()}`, styles, inputMessage);
    }
  },
};
