/**
 * @file:      获取当前时间
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
const chalk = require('chalk');

module.exports = {
    /**
     * [getIp]  获取本机IP地址
     * @return {String} 返回本机IP地址
     */
    run: function() {
        var sd = require('silly-datetime');
        var formateTime = lang === 'zh'? 'YYYY年MM月DD日 HH:mm:ss' : 'YYYY-MM-DD HH:mm:ss';
        var time = sd.format(new Date(), formateTime);
        const lg = require('../i18n/shell/' + lang + '.json');
        log(lg.current_time + ': ' + chalk.green(time));
    },

    /**
     * [help] 显示帮助信息
     */
    help: function() {
        const lg = require('../i18n/help/' + lang + '.json');
        log('  -t [' + lg.ip_help + ']');
    }
};
