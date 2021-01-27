const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()

    //using some just to check just 1 and return and not to iterate through all the notes

    const ifPresent = notes.some((item) => item.title.toLowerCase() === title.toLowerCase())

    
   
    if(!ifPresent){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added');
    }
    else {
        console.log('your title taken');
    }
   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const removeNotes = (title) => {
   
    const data = loadNotes()
    const notesToKeep = data.filter((item) => item.title !== title)
    

    if(data.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note of this title found'));
    }
}

const loadNotes = () => {
   
        try{
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        }
        catch(error) {
            return []
        }
  
}


const listNotes = () => {
    const data = loadNotes()
    data.map(item => console.log(chalk.green.inverse('Your notes'), item.title))
}

const readNotes = (title) => {
        const data = loadNotes()

        const noteBody = data.find((item) => item.title.toLowerCase() === title.toLowerCase())
        
        if(noteBody) {
            console.log(chalk.inverse(noteBody.title));
            console.log(noteBody.body);
        }
        else{
            console.log(chalk.red.inverse('Note not found'));
        }
}


module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}