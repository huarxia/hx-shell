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
    readdir: function() {
        fs.readdir(path, function(err, files){
            if(err){
                return log(err);
            }
            chalkColorLen = chalkColor.length;
            var len = files.length;
            log('total ' + len);
            for(var i = 0; i < len; i += 1){
                fs.stat(files[i],function(err,stat){
                    // console.log("isFile",stat.isFile());
                    // console.log("isDirectory",stat.isDirectory());
                    // if(stat.isFile()){
                    //     console.log("file size",stat.size);
                    //     console.log('birthtime',stat.birthtime);
                    //     console.log('modified time',stat.mtime)
                    // }
                })
                var n = Math.ceil(Math.random() * chalkColorLen) - 1;
                n = n === 0? 1: n;
                log(chalk[chalkColor[n]](files[i]));
            }
        });
    }
};