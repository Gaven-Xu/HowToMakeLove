#!/usr/bin/env node

var fs = require('fs'),
  path = process.cwd(),
  cp = require('child_process');

var run = function () {
  var args = arguments[0];
  console.log(args.length);
  switch (args.length) {
    case 0:
      console.log('Command not Complete');
      break;
    case 1:
      {
        if (args[0] == 'hello') {
          cp.exec('echo hello > hello.txt');
        }
      }
      break;
    default:
      console.log('You have entered ' + args.length + ' arguments');
  }
}

run(process.argv.slice(2));
// 获取命令
