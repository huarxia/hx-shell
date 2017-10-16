/**
 * @file:      获取工具版本信息
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-13 16:50:09
 */

const package    = require('../package.json');
const version    = package.version;
const name       = package.name;
var langJson = require('../i18n/lang.json');
const chalk    = require('chalk');

module.exports = {
    /**
     * [getIp]  获取本机IP地址
     * @return {String} 返回本机IP地址
     */
    run: function() {
        var lang = langJson.lang || 'zh';
        if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
            lang = 'zh';
        }
        var lg = require('../i18n/shell/' + lang + '.json');
        console.log(lg.version_is + ': ' + chalk.green(version));
        console.log(lg.node_version_is + ': ' + chalk.green(process.version));
    }
};
