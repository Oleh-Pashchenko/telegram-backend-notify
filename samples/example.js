const backendNotify = require('./index');
const notify = new backendNotify('token');

notify.emit('Hello Telegram :)').catch(error => {
    console.log(error);
});