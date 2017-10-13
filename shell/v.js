/**
 * @file:      获取工具版本信息
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-13 16:50:09
 */

const package    = require('../package.json');
const version    = package.version;
const name       = package.name;
const chalk    = require('chalk');

/**
 * [getIp]  获取本机IP地址
 * @return {String} 返回本机IP地址
 */
module.exports = function() {
    console.log('version is ' + chalk.green(version));
}
