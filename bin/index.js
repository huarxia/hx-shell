#!/usr/bin/env node  

const chalk    = require('chalk');
const log      = console.log;
const readdir  = require('../shell/readdir').readdir;
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
    var fun = require('../shell/' + param);
    fun();
};

// 获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 
