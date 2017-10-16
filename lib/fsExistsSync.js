/**
 * @file:      检测一个文件是否存在
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-10-16 17:59:50
 */
var fs   = require('fs');
var path = require('path');
module.exports = function fsExistsSync(p) {
    try {
        fs.accessSync(path.join(__dirname, p), fs.F_OK);
    }catch (e) {
        return false;
    }
    return true;
}