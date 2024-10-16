// give a name to step

function begin() {
    console.log("IN THE BEGINNING...");
}
function middle(){
    console.log("INTO THE HEART OF CODING...")
}
function end(){
    console.log("WRAPPING IT UP. Fini.")
}
//invoke or call
begin()
middle()
end()


function greet(who, age){
    console.log('Heyyy $(who)!!!');
    if(age <=40){
        console.log("Older, wiser, hotter!!!")
    }else{
        console.log("All the time in the world.")
    }
}
greet("Etisyai" , 28)
greet("Class" , 30)

console.log(new Date(0));