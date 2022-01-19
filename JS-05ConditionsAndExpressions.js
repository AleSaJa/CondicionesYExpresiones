// Exercise #1
console.log("Exercise #1");
var names = ["Maria", "Antony", "Joy", "Juan"];

// Part 1
console.log("Part 1");
insertName("Alejandro");
for(user of names){
    console.log(user);
}

function insertName(name){
    names.push(name);
}

// Part 2
console.log("Part 2");

var user = prompt("Insert a name:");
console.log(`The name ${user} is in the array: ${checkName(user,names)}`);

function checkName(user,array){
    for(element of array){
        if (user===element){
            return true;
        }
    } return false;
}

// Part 3
console.log("Part 3");

var users = new Array("Jessica","Maria","Nicólas","David","Alejandro","Ana");

console.log(`The elements with the names that are in both lists are: ${checkNamesTwoList(names,users)}`);

function checkNamesTwoList(array1,array2){
    let aux = new Array();
    for(element1 of array1){
        for(element2 of array2){
            if (element1===element2){
                aux.push(element1);
            }
        }
    }
    if(aux.length==0){
        return false;
    }   return aux;
}

// Part 4
console.log("Part 4");

var users = new Array("Jessica","Maria","Nicólas","David","Alejandro","Ana");

console.log(`The numbers of the letters, from the each element, in same order are: ${checkLettersList(names)}`);

function checkLettersList(array){
    let aux = new Array();
    for(element of array){
        aux.push(element.length);
    }
    if(aux.length==0){
        return false;
    }   return aux;
}

// Exercise #2

false || (true && false);
// Return: false

(31 + 22) || true;
// Return: true

true && (1 + 7);
// Return: true

false && (3 + 4);
// Return: false

(1 + 2) && true;
// Return: true

(32 * 4) >= 129;
// Return: false

false !== !true;
// Return: false

true === 4;
// Return: false

false === (847 === '847');
// Return: true

false === (887 == '887');
// Return: false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// Return: true


// Exercise #3
console.log("Exercise #3");

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'

function numberRange(value){
    if(isNaN(value))
        console.log("Error Value");
    else if(value>=0 && value<=25)
    console.log(`${value} is between 0 and 25`);
    else if(value>=26 && value<=100)
        console.log(`${value} is between 26 and 100`);
    else if(value<0)
        console.log(`${value} is less than 0`);
    else if(value>100)
        console.log(`${value} is greater than 100`);
}

// Addittional Exercise

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = !!a || !!b || !!c || !!d || !!e;
// f = true

console.log(f);