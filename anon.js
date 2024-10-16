







// A function is value, that may or may not have an indentifier(function name)

// ANONYMOUS FUNCTIONS 

let a = 123
let b = a
let c = b
console.log(c)

//traditional
function greet(firstName){
    return "howdy" + firstName;
}

console.log(greet("classmates"));

//funcitonal programming (treat a function as a value)
let greet2 = (firstName) => "howdy" + firstName;

hi = greet2

console.log(hi("classmates"));


function bye(){
    console.log("Bye");
}
bye();


//IFE (immediatly invoked function expression)
(()=> console.log("Goodbye"))();

function bePolite(who, callback){
    return what(who)
}
console.log(bePolite("classmates", greet  ));
console.log(bePolite("classmates", greet2 ));
console.log(bePolite("classmates", hi     ));
console.log(bePolite("classmates", s=> `night night ${s}`));
