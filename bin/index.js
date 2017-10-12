#!/usr/bin/env node  

var fs = require('fs');
var path = process.cwd();
const chalk = require('chalk');
var chalkColor = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright'];
var package = require('../package.json');
var name = package.name;
var version = package.version;

var run= function (obj) {
    if(obj[0] === '-v'){
        console.log('version is ' + chalk.green(version));
    }else if(obj[0] === '-h'){
        console.log('Useage:');
        console.log('  -v --version [show version]');
    }else{
        switch (obj[0]) {
            case '-ip':
                var ip = require('../shell/ip').getIp();
                console.log('local ip is ' + chalk.green(ip));
            break;
            default:
                readdir();
            break;
        }
    }
};
var readdir = function() {
    fs.readdir(path, function(err, files){
        if(err){
            return console.log(err);
        }
        chalkColorLen = chalkColor.length;
        for(var i = 0; i < files.length; i += 1){
            var n = Math.ceil(Math.random() * chalkColorLen) - 1;
            n = n === 0? 1: n;
            console.log(chalk[chalkColor[n]](files[i]));
        }
    });
}
//获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 
