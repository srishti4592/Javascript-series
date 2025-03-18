//How to print array?
const myArray=[1,2,3,4,5]
const counting=[11,12,13,14,15]
console.log('A',myArray);

//Use of push in array
myArray.push(9)
console.log('B',myArray);

//Use of pop in array
myArray.pop()
console.log('C',myArray);

//Use of slice in array
const newarray=myArray.slice(0,2)
console.log('D',newarray);

//Use of splice in array
let newarray2=myArray.splice(1,4)
console.log('E',newarray2);

//Use of join in array
myArray.join(counting)
console.log('G',myArray);

//Use of push of array in array
myArray.push(counting)
console.log(myArray);

/*Use of concat in array
To merge to arrays in one array.

//Use of spread operator in array (...)
To merge one or more arrays.

//Use of flat in array
To covert multiples array inside arrays in single array.

//Use of from in array
To convert strin into array

//Use of .of in array
To convert multiple things in one array.*/