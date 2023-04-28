//const program = require('commander');

import {Command} from 'commander';
const program = new Command();

program
.version('0.0.1')

//Commmands
.command('say')
.description('Say Something Interseting')
.alias('s')
/*
.command('yay')
.description('say yayyyyy what you feel')
.alias('y')
*/
.action(function(name){
  console.log(name)
});

//Options
program
  .option('-c, --code', 'Setup Coding Environment')
  .parse(process.argv)

  const opts = program.opts();
  if(opts.code){
    console.log('you have chosen to start coding');
  }else{
    console.log('Error. Put command and option again');
  }

/*
const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
*/