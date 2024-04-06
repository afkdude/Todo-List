// loops


// while loop
// let no = 1;

// while (no <=10) {
//   console.log(no);
//   no++;
// }


// for (let i = 1; i <= 15; i=i*2){
//   console.log(i);
// }

// let arr = [2, 7, 6, 5, 8, 9];
 
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
  
//   sum +=arr[i];

  
// }

// console.log(`Sum of the array is ${sum}`);


// let sqrArr=[];
// for (let i = 0; i < arr.length; i++){

//   sqrArr[i] = arr[i] * arr[i];

//   console.log(sqrArr[i]);
// }


// practice exerscise

// let array = [5, 6];
// array.unshift(4);
// array.push(7);

// console.log(array);

// let position = 2;
// function elmtPosition(array , position) {
//   return array[position];
// }

// console.log(elmtPosition(array, position));


// let array2 = array.slice();

// console.log(array2);






// while loop counting till 5 prime number


// function isPrime(num) {
//   for (let i = 2; i < num; i++){
//     if (num % i === 0) {
//       return false;
//     } 
//   }

//   return true;
// }

// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(8));
// console.log(isPrime(10));
// console.log(isPrime(17));

// let up = 30
// let count = 0; 
// for (let j = 2; j <= 30; j++) {
  
//   if (isPrime(j) && count<5) {
//     count++;
//     console.log(j);
//   } else {
//     continue;
//   }
  
// }

// let num = 2; 

// while (count<5) {
//   if (isPrime(num)) {
//     count++;
//     console.log(num);
//   }
  
//   num++;

// }


// 1-10 in reverse


// for (let i = 10; i >= 1; i--){
//   console.log(i);
// }


// let given = [1, -6, 5, 7, -98];

// for (let i = 0; i < given.length; i++){
//   if(given[i]<0){
//     continue;
//   }
//   console.log(given[i]);
// }



// let strArr = ['KG', 'Coding', 'Javascript', 'Course', 'is', 'Best'];

// let finStr = '';

// for (let i = 0; i < strArr.length; i++){
//   finStr += strArr[i]+' ';
// }

// console.log(finStr);