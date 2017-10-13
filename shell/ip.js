/**
 * @file:      文件说明
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-12 11:12:15
 */

const log      = console.log;
const chalk    = require('chalk');
/**
 * [getIp]  获取本机IP地址
 * @return {String} 返回本机IP地址
 */
module.exports = function() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var items = interfaces[devName];
        for (var i = 0, len = items.length; i< len; i++) {
            var alias = items[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                log('local IP is: ' + chalk.green(alias.address));
            }
        }
    }
}
