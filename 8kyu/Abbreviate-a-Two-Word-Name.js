// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    let pos = name.indexOf(' ')
    let str = name[0]+'.' + name[pos+1]
    return str.toUpperCase()
    }

