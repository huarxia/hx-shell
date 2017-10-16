/**
 * @file:      获取帮助信息
 * @author:    花夏(liubiao@liubiao.com)
 * @version:   V0.0.1
 * @date:      2017-10-13 16:59:42
 */
const log      = console.log;
const langJson = require('../i18n/lang.json');
var lang = langJson.lang || 'zh';
if (langJson.lang !== 'en' && langJson.lang !== 'zh') {
    lang = 'zh';
}
const lg = require('../i18n/help/' + lang + '.json');
module.exports = {
    run: function() {
        log('Useage:');
        log('  -h  [' + lg.show_help + ']');
        getAllHelp();
    }
};

function getAllHelp() {
    var requireDir = require('require-dir');
    var file = requireDir('./', {recurse: true});
    for (var item in file) {
        file[item].help && file[item].help();
    }
}
