// let const and var
// let is a modern js keyword that come after es6

// var has global scope || re-declared and intialized in its scope
// let has local scope || re-intialized but cannot redeclared
// const has limited scope || cannot re-declared and reinitialize you need to intialize at the time of declaration

// pros of using let in place of var

let a = 10
// let a = "This is me Niraj " // so it will give us error say identifier a has already been declared so this is a good practice not to declared variable that is already declared

// but in the case of var 

var b = 10
var b = "This is me Niraj" 
// we again declare the variable that is already been declared so that is why let come in scenario

// so we always use let 
let data = document.getElementById('meri-line')
console.log(data)
data.innerHTML = "<h1>Mera js ke notes dekh lena js refresh krne ke liye vahi sab hai </h1>"

document.addEventListener('click',click = ()=>{
    console.log('Clicked')
    alert("Hey there you click here")
})