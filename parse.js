
//PARSE - paring knife, parcel
//  substring(start, end) //NO SUPPORT FOR NEGATIVE
//  substr(start, length) // USES LENGTH WHICH IS WEIRD
//  slice(start, end) //ALL PURPOSE BUT ONLY MAKES ONE CUT
//  split(" ") if you can use split its even better MULTIPLE CUTS W NO NUMBERS
//ORPORTLAND - slice me as i have no delimiter e.g. " " or  "."

//body of text is a corpus in AI ML
let corpus = "Now is the time..." //array/list of characters
console.log("LENGTH", corpus.length)

// i=0
// console.log(corpus[i++])
//i is for index
// i++ is shorhand for i = i + 1
//for(initialize/start; boolean expression when to stop; change/increment){ code to repeat }

for(let i=0; i < corpus.length; i++){
    console.log(corpus[i]) //REPEAT
}
console.log("DONE")

// for(i=0; i < corpus.length; i++){
//     console.log("INDEX:"+i, "LETTER:"+corpus[i], "CODE:"+corpus[i].charCodeAt(0)) //REPEAT
// }
words = corpus.split(" ")
console.log(words)
console.log("LENGTH (word count):", words.length)
console.log("FIRST WORD:", words[0])//first word
console.log("LAST WORD:", words[words.length - 1])//last word

for(let i=0; i < words.length; i++){
    console.log(words[i]) //REPEAT
}

ip = "127.128.128.255"
parts = ip.split(".")
console.log(parts)
console.log(parts[3])
