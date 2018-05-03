// for (let i = 100; i >= 0; i-- ) {
//     if (i % 1 === 0){
//      document.write(i+ '<br>');   
//     }
    
    
// }        

// i = 0;
// while (i <= 100) {
//     document.write(i + "<br>");
//     i++;
    
// }
// let j = 0
// do {
//     document.write(j + "<br>");
//     j++;

// } while (j <= 100) 
// let a;    
// do {
//     alert('Please enter a number !');
//      a = parseFloat(prompt('Enter A'));
// } while (isNaN (a));

// document.write(a);


// let a; 


// do {
//     alert('please enter number');
//     a = parseFloat(prompt('Enter coef A'));
    
// } while (isNaN(a));

// document.write(a + 1);

// function prn(value) {
//     document.write(value + '<br>')
// }

// let products= ['tesla model x', 'Porshe Panamera', 'McLaren F1']
// // products.push('ferrari laferrari');
// products[3] = "bugatti veyron";
// products[4] = 'something';
// // prn(products.length); 
// for (let i = 0; i < products.length; i++) {
//     if (products[i] === undefined) {
//         continue;
//     }
    
//     prn(products[i]);
// }

// products.forEach(prn);
// products.forEach(function(element){
//     document.write(element+'<br>');
// });

// const printVal = (el => document.write(el +'<br>'));
// products.forEach(el => document.write(el +'<br>')); 

// while(products.length > 0) {
//     prn(products.pop())
    
// }

// products.sort((a,b)=> a- b );
// prn(products)

// let begin = alert('Begin?');
// let question = prompt("Whats off name of JS?");

// if (question == "EcmaScript") {
//     alert('that was good');
// }
// else {
//     alert('how about ecmascript?')
// }


const n = parseFloat(prompt('Введіть порядковий номер числа Фібоначчі, яке ви хочете отримати'));
let fibo = [];
fibo[0] = 1;
fibo[1] = 1;
for (let i = 2; i < n; i++) {
    fibo[i]=fibo[i-1]+fibo[i-2];
}
alert( fibo.slice(-1) );


// let n;
// const fibo = [0,1];
// let i = 2;
// do {
//     alert('Вводьте лише числа');
//     n = parseFloat(prompt('Введіть порядковий номер числа Фібоначчі, яке ви хочете отримати'));
//     let i = 2;
//     i++;
//     fibo[i]=fibo[i-1]+fibo[i-2];

// } while(isNaN(n)) (i < 2);

// alert(fibo.slice(-1));