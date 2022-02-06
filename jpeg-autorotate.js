const Promise = require('bluebird');
const jo = require('jpeg-autorotate');

const jpegAutorotate = (buffer, options) => {
    return new Promise((resolve, reject) => {
        jo.rotate(buffer, options, (err, newBuffer) => {
            if(err) {
                return reject(err);
            }

            resolve(newBuffer);
        });
    });
};

module.exports = jpegAutorotate;