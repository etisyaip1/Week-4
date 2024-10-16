fenty = "rihanna"

function classRoom(){
    let firstName = "Etisyai"
    console.log(firstName + " is a star")
    console.log(firstName + " loves to listen to " + fenty)
}

console.log(fenty + " please don't stop the music.")





classRoom();


console.log(firstName + " music is life .")





//fucntion/block scope {{nesting like a russian doll}}
let outer = 0;
function add (a,b){
    let output = a + b
    return output;
}
function mult (a,b){
    let output = a * b
    return output;
}

console.log(mult(6,7))
console.log(add(6,7))

console.log(output); 
