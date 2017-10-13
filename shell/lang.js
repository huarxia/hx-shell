/**
 * @file:      获取+设置语言
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-12 11:12:15
 */

const fs     = require('fs');
const path   = require('path');
const log    = console.log;
const chalk  = require('chalk');
var langJson = require('../i18n/lang.json');
/**
 * [getIp]  获取本机IP地址
 * @return {String} 返回本机IP地址
 */
module.exports = function() {
    var lang = langJson.lang || 'zh';
    if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
        lang = 'zh';
    }
    var lg = require('../i18n/shell/' + lang + '.json');
    var argv = process.argv.slice(2);
    var len = argv.length;
    if (len <= 1) {
        log(lg.lang_message + ': ' + chalk.green(lang));
        log(lg.lang + ': [' + chalk.green('zh, en') + ']');
    }else if (len > 1) {
        var setLang = argv[1];
        var langPath = path.join(__dirname, '../i18n/lang.json');
        fs.readFile(langPath, 'utf8', function(err, data){
            if (err) {
                log(chalk.red(lg.readfile_err));
            } else {
                data  = JSON.parse(data);
                data.lang = setLang;
                whiteData = JSON.stringify(data);
                fs.writeFile(langPath, whiteData, function(err) {
                    if (err) {
                        log(chalk.red(lg.whitefile_err));
                    }else {
                        log(lg.set_lang + ': ' + chalk.green(setLang));
                    }
                });
            }  
        });
    }
}
