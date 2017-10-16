/**
 * @file:      获取工具版本信息
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-13 16:50:09
 */

const package = require('../package.json');
const version = package.version;
const name    = package.name;
var langJson  = require('../i18n/lang.json');
var lang      = langJson.lang || 'zh';
const log     = console.log;
const chalk   = require('chalk');

module.exports = {
    /**
     * [getIp]  获取本机IP地址
     * @return {String} 返回本机IP地址
     */
    run: function() {
        if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
            lang = 'zh';
        }
        var lg = require('../i18n/shell/' + lang + '.json');
        log(lg.version_is + ': ' + chalk.green(version));
        log(lg.node_version_is + ': ' + chalk.green(process.version));
    },

    /**
     * [help] 显示帮助信息
     */
    help: function() {
        const lg = require('../i18n/help/' + lang + '.json');
        log('  -v  [' + lg.show_version + ']');
    }
};
