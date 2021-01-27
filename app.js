const notes = require('./notes')
const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

//console.log(yargs.argv);

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
       title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
       }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()