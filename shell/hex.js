/**
 * @file:      转换为十六进制
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-17 10:32:51
 */

const log      = console.log;
const langJson = require('../i18n/lang.json');
var lang = langJson.lang || 'zh';
if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
    lang = 'zh';
}
const lg = require('../i18n/shell/' + lang + '.json');
const chalk = require('chalk');

module.exports = {
    /**
     * [run]  转换为十六进制
     * @return {String} 返回本机IP地址
     */
    run: function() {
        var argvs = process.argv.slice(2);
        var n = argvs[1];
        // 二进制数字
        const reBinary = /^1[10]*(bo|BO)$/;
        // 八进制数字
        const reOctal = /^0[0-7]+$/;
        // 十进制数字
        const reDecimal = /^[0-9]*$/;
        // 十六进制数字
        const reHex = /^((0x|0X)([a-f\d])+,\s)*(0x|0X)([a-f\d])+$/;
        if (reBinary.test(n)) {
            // 二进制转换为十六进制
            n = parseInt(n, 2).toString(16);
        }else if (reOctal.test(n)) {
            // 八进制转换为十六进制
            n = parseInt(n, 8).toString(16);
        }else if (reDecimal.test(n)) {
            // 十进制转换为十六进制
            n = parseInt(n, 10).toString(16);
        }else if (reHex.test(n)) {
            // 十六进制时不变
            n = n.substring(2, n.length);
        }else {
            n = n + ': ' + lg.isNaN;
        }
        log(chalk.green(n));
    },

    /**
     * [help] 显示帮助信息
     */
    help: function() {
        const lg = require('../i18n/help/' + lang + '.json');
        log('  -hex [' + lg.transformation_hex + ']');
    }
};
