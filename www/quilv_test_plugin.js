var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'quilv_test_plugin', 'coolMethod', [arg0]);
};
