import config from './config';

/*
  Log Types:
    1) info
    2) warn
    3) error
    4) resp
    5) other
*/

export default {
  log: (inputTitle, inputMessage) => {
    const styles = [
      'color: #222222',
      'display: block',
      'line-height: 20px',
      'text-align: center',
      'font-weight: bold',
    ].join(';');

    if (config.logType === 'log' || config.logType === '') {
      if (inputTitle && !inputMessage) {
        /*
          kk.log içerisinde tek değişken gönderiliyorsa
          değişkenler arası veri aktarımı yapılmaktadır.
        */
        const message = inputTitle;
        inputMessage = message;
        inputTitle = 'all';

        /*
          Bu kısımda keyword filtreleme işlemleri yapılmaktadır.
        */
        if (inputMessage) {
          const filteredMessage = inputMessage.indexOf(config.keyword);
          if (filteredMessage === 0) {
            console.log(`%c${inputTitle.toUpperCase()}`, styles, inputMessage);
          }
        }
      } else {
        /*
          Bu kısımda keyword filtreleme işlemleri yapılmaktadır.
        */
        const filteredMessage = inputMessage.indexOf(config.keyword);
        if (filteredMessage === 0) {
          console.log(`%c${inputTitle.toUpperCase()}`, styles, inputMessage);
        }
      }
    }
  },
  info: (inputTitle, inputMessage) => {
    let title = '';
    let message = '';
    let convertedMessage = '';
    // set LogStyle
    const styles = [
      'color: #01B80D',
      'display: block',
      'line-height: 20px',
      'text-align: center',
      'font-weight: bold',
    ].join(';');

    // Tek değişkene sahip log gönderilme case'inde title, message olarak set edilir.
    if (inputTitle && !inputMessage) {
      this.message = inputTitle;
      this.title = 'INFO';
    } else {
      this.title = inputTitle;
      this.message = inputMessage;
    }

    // Objeyi filtreleyebilmek için string'e dönüştürme işlemi.
    this.convertedMessage = JSON.stringify(this.message);

    // LogType Filtreleme
    if (config.logType === 'info' || config.logType === '') {
      // setFilter fonksiyonundan keyword gelip gelmediğinin kontrolünün sağlanması.
      if (config.keyword) {
        // Word Filtreleme
        const filteredMessage = this.convertedMessage.indexOf(config.keyword);
        if (filteredMessage !== -1) {
          console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
        }
      } else {
        console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
      }
    }
  },
  warn: (inputTitle, inputMessage) => {
    let title = '';
    let message = '';
    let convertedMessage = '';
    // set LogStyle
    const styles = [
      'color: #ff9966',
      'display: block',
      'line-height: 20px',
      'text-align: center',
      'font-weight: bold',
    ].join(';');

    // Tek değişkene sahip log gönderilme case'inde title, message olarak set edilir.
    if (inputTitle && !inputMessage) {
      this.message = inputTitle;
      this.title = 'WARNING';
    } else {
      this.title = inputTitle;
      this.message = inputMessage;
    }

    // Objeyi filtreleyebilmek için string'e dönüştürme işlemi.
    this.convertedMessage = JSON.stringify(this.message);

    // LogType Filtreleme
    if (config.logType === 'warn' || config.logType === '') {
      // setFilter fonksiyonundan keyword gelip gelmediğinin kontrolünün sağlanması.
      if (config.keyword) {
        // Word Filtreleme
        const filteredMessage = this.convertedMessage.indexOf(config.keyword);
        if (filteredMessage !== -1) {
          console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
        }
      } else {
        console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
      }
    }
  },
  error: (inputTitle, inputMessage) => {
    let title = '';
    let message = '';
    let convertedMessage = '';
    // set LogStyle
    const styles = [
      'color: #cc3300',
      'display: block',
      'line-height: 20px',
      'text-align: center',
      'font-weight: bold',
    ].join(';');

    // Tek değişkene sahip log gönderilme case'inde title, message olarak set edilir.
    if (inputTitle && !inputMessage) {
      this.message = inputTitle;
      this.title = 'ERROR';
    } else {
      this.title = inputTitle;
      this.message = inputMessage;
    }

    // Objeyi filtreleyebilmek için string'e dönüştürme işlemi.
    this.convertedMessage = JSON.stringify(this.message);

    // LogType Filtreleme
    if (config.logType === 'error' || config.logType === '') {
      // setFilter fonksiyonundan keyword gelip gelmediğinin kontrolünün sağlanması.
      if (config.keyword) {
        // Word Filtreleme
        const filteredMessage = this.convertedMessage.indexOf(config.keyword);
        if (filteredMessage !== -1) {
          console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
        }
      } else {
        console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
      }
    }
  },
  resp: (inputTitle, inputMessage) => {
    let title = '';
    let message = '';
    let convertedMessage = '';
    // set LogStyle
    const styles = [
      'color: #1A81F3',
      'display: block',
      'line-height: 20px',
      'text-align: center',
      'font-weight: bold',
    ].join(';');

    // Tek değişkene sahip log gönderilme case'inde title, message olarak set edilir.
    if (inputTitle && !inputMessage) {
      this.message = inputTitle;
      this.title = 'RESPONSE';
    } else {
      this.title = inputTitle;
      this.message = inputMessage;
    }

    // Objeyi filtreleyebilmek için string'e dönüştürme işlemi.
    this.convertedMessage = JSON.stringify(this.message);

    // LogType Filtreleme
    if (config.logType === 'resp' || config.logType === '') {
      // setFilter fonksiyonundan keyword gelip gelmediğinin kontrolünün sağlanması.
      if (config.keyword) {
        // Word Filtreleme
        const filteredMessage = this.convertedMessage.indexOf(config.keyword);
        if (filteredMessage !== -1) {
          console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
        }
      } else {
        console.log(`%c${this.title.toUpperCase()}`, styles, this.message);
      }
    }
  },
  setFilter: (keyword) => {
    config.keyword = keyword;
  },
  setLogType: (logType) => {
    config.logType = logType;
  },
};
