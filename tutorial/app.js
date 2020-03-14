const chalk = require('chalk');
const yargs = require('yargs')
const getNotes  = require('./notes');
yargs.version('1.1.0')


yargs.command({
    command:'add',
    describe:'Add new file',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption: true,
            type:'string'
        }
    },
    
    handler: function   (argv)  {
        console.log('title: '+ argv.title)
        console.log('body:' + argv.body)
    }
});

yargs.command({
    command:'remove',
    describe:'Remove a file',
    handler:function() {
        console.log('Removed successfully')
    }

})
yargs.parse()
const msg = getNotes()
console.log(msg)