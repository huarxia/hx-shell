#!/usr/bin/env node  

const chalk    = require('chalk');
const log      = console.log;
const readdir  = require('../shell/readdir').readdir;
var run = function (obj) {
    if (obj.length <= 0) {
        readdir();
        return;
    }
    var argv = obj[0].toLowerCase();
    var paramArr = argv.split('-');
    if (paramArr.length < 2) {
        readdir();
        return;
    }
    // 获取第二个参数并去掉首尾空格
    var param = paramArr[1].replace(/(^\s*)|(\s*$)/g, '');
    var fun = require('../shell/' + param);
    fun();
};

// 获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 
