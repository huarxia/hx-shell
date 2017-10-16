/**
 * @file:      文件说明
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-12 11:12:15
 */

const log      = console.log;
const langJson = require('../i18n/lang.json');
var lang = langJson.lang || 'zh';
if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
    lang = 'zh';
}
const chalk    = require('chalk');

module.exports = {
    /**
     * [getIp]  获取本机IP地址
     * @return {String} 返回本机IP地址
     */
    run: function() {
        var interfaces = require('os').networkInterfaces();
        const lg = require('../i18n/shell/' + lang + '.json');
        for (var devName in interfaces) {
            var items = interfaces[devName];
            for (var i = 0, len = items.length; i< len; i++) {
                var alias = items[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    log(lg.local_ip_is + ': ' + chalk.green(alias.address));
                }
            }
        }
    },

    /**
     * [help] 显示帮助信息
     */
    help: function() {
        const lg = require('../i18n/help/' + lang + '.json');
        log('  -ip [' + lg.ip_help + ']');
    }
};
