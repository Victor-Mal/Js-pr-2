//1. функция sayType которая на тип число вернет
//фразу "это число", на строку "это строка",
//а на остальные типы "не знаю" (if/else или switch)
function sayType (value) {
    if(typeof(value) === "number"){
        return "это число";
    };
    if(typeof(value) === "string"){
        return "это строка";
    };
    return "не знаю";
    
}
console.log(sayType("dfg"));
//2.* функция randNum которая вернет
//случайное число от 0 до 100 (Math.random)
function randNum (max) {
    return Math.random() * max;
}
console.log(randNum(100));
//3. цикл который добавит 7 звездочек в переменную
let star = "";
for (let i = 0; i < 7; i++) {
    star += "*";
}
console.log(star);
//4//4. * 2 цикла которые добавят звездочки и "\n" в переменную
//и составят квадрат из звездочек
let stringSquare = '';
for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
        stringSquare += '*';
    }
    stringSquare += '\n';
}
console.log(stringSquare);
//5. массив чисел 1 до 10, обычным циклом удалить у него
//каждое нечетное свойство ( delete array[3] )
const array = [];
for (let i = 1; i <= 10; i++) {
    array.push (i);
}
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
       delete array[i]; 
    }
}
console.log(array);

//6. массив чисел от 1 до 5, !обычным циклом!
//без использования push, concat добавить в
//конец числа от 6 до 10

const array1 = [1, 2, 3, 4, 5];
for (let index = 5; index < 10; index++) {
    array1[index] = index+1;
}

console.log(array1);

//7* циклом создать массив строк от user1 до user5,
//удалить все строки содержащие на конце числа от 2 до 4
//["user1", "user2", "user3", "user4", "user5"]

const array2 = [];
for (let i = 1; i <= 5; i++) {
    text = "user" + i;
    array2.push (text);
        
}
for (let i = 0; i < array2.length; i++) {
    const condition = (Number(array2[i].slice(-1)) >= 2 && 
    Number(array2[i].slice(-1)) <= 4)
    if(condition) {
        delete array2[i];
}; 
}
console.log(array2); 

//8. массив чисел от 5 до 10 добавить в конец другого массива (push)

const array3 = [];
for (let i = 1; i < 5; i++) {
    array3.push (i);
}
for (let i = 5; i <= 10; i++) {
    array3.push (i);
} 
console.log(array3);

//9. массив (с любыми данными) перевести в строку с разделителем " или "

const array4 = [1, 2, 'qwer', 4, 5];
const arr4 = array4.join(' или ');
console.log(arr4);

//10. массив чисел [4, 9, 16, 25, 36, 49], на его основе создать
//массив с квадратными корнями чисел (array.map) (Math.sqrt)

const num = [4, 9, 16, 25, 36, 49]
const sqrt = num.map(Math.sqrt);
console.log(sqrt);

 