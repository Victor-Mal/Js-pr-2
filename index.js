//1//
function sayType (value) {
    if(typeof(value) === "number"){
        return "это число";
    };
    if(typeof(value) === "string"){
        return "это строка";
    };
    return "не знаю";
    
}
console.log(sayType("sdfg"));
//2//
function randNum (max) {
    return Math.random() * max;
}
console.log(randNum(100));
//3
let star = "";
for (let i = 0; i < 7; i++) {
    star += "*";
}
console.log(star);
//4//
let stringSquare = '';
for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
        stringSquare += '*';
    }
    stringSquare += '\n'
}
console.log(stringSquare);
//5//
const array = [];
for (let i = 1; i <= 10; i++) {
    array.push (i);
}
console.log(array);
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
       delete array[i]; 
    }
}
console.log(array);
//6
/* const array1 = [];
for (let i = 1; i <= 5; i++) {
    array1[index] = index + 1;
} */
//7
const array2 = [];
for (let i = 1; i <= 5; i++) {
    text = "user" + i;
    array2.push (text);
}
//foreach
console.log(array2);
/* console.log(array2.filter(function (value) {
        return value[4] === ('4');
    })); */
        

//8
const array3 = [];
for (let i = 1; i < 5; i++) {
    array3.push (i);
}
console.log(array3);
for (let i = 5; i <= 10; i++) {
    array3.push (i);
} 
console.log(array3);
//9
//**** */
//10
const num = [4, 9, 16, 25, 36, 49]
const sqrt = num.map(Math.sqrt);
console.log(sqrt);
//11
 