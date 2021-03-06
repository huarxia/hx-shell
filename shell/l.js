/**
 * @file:      文件说明
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-12 11:12:15
 */

var fs         = require('fs');
var path       = process.cwd();
const log      = console.log;
const chalk    = require('chalk');
var chalkColor = require('../config/').chalkBaseColor;
module.exports = {
    /**
     * [run] 读取文件以及文件夹名称
     */
    run: function() {
        fs.readdir(path, function(err, files){
            if(err){
                return log(err);
            }
            chalkColorLen = chalkColor.length;
            var len = files.length;
            log('total ' + len);
            for(var i = 0; i < len; i += 1){
                var n = Math.ceil(Math.random() * chalkColorLen) - 1;
                n = n === 0? 1: n;
                log(chalk[chalkColor[n]](files[i]));
            }
        });
    },

    /**
     * [help] 显示帮助信息
     */
    help: function() {
        const langJson = require('../i18n/lang.json');
        var lang = langJson.lang || 'zh';
        if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
            lang = 'zh';
        }
        const lg = require('../i18n/help/' + lang + '.json');
        log('  -l  [' + lg.show_catalog + ']');
    }
};
