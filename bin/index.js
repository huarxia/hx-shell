#!/usr/bin/env node  

var fs         = require('fs');
const chalk    = require('chalk');
const log      = console.log;
var run = function (obj) {
    // 如果没有参数则运行帮助文档
    if (obj.length <= 0) {
        obj[0] = '-h';
    }
    var argv = obj[0].toLowerCase();
    var paramArr = argv.split('-');
    // 如果不带 - 则提示文档信息
    if (paramArr.length < 2) {
        paramArr[1] = 'h';
    }
    // 获取第二个参数并去掉首尾空格
    var param = paramArr[1].replace(/(^\s*)|(\s*$)/g, '');
    const path = '../shell/' + param + '.js';
    fs.exists(path, function(exists) { 
        // 如果随便输入一个命令则显示帮助; 
        if (exists) {
            param = 'h';
        }
        var fun = require('../shell/' + param).run;
        fun();
    });
};

// 获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 
