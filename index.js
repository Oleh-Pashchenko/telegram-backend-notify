const request = require('request');

function BackendNotify(token) {
    if (typeof(token) != "string") {
        throw new Error('Token must be string');
    }
    this.token = token;
}

BackendNotify.prototype.emit = function(message) {
    return new Promise((resolve, reject) => {
        request({
            url: '',
            json: {
                data: {
                    token: this.token,
                    message: message
                }
            },
            method: 'POST',
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else if (response.statusCode != 200) {
                reject(body);
            } else {
                resolve();
            }
        });
    });
};

module.exports = BackendNotify;