
alert('Введіть будь ласка числове значення');
const fiboNubmer = parseFloat(prompt('Введіть порядковий номер числа Фібоначчі, яке ви хочете отримати'));
let fiboValue = [];
fiboValue[0] = 1;
fiboValue[1] = 1;

for (let i = 2; i < fiboNubmer; i++) {
    fiboValue[i]=fiboValue[i-1]+fiboValue[i-2];
}

document.write(fiboValue.slice(-1));



// let fiboNubmer;
// let fiboValue = [];
// fiboValue[0] = 1;
// fiboValue[1] = 1;
// let i;

// do {
//     alert('введіть будь ласка числове значення');
//     fiboNubmer = parseFloat(prompt('Введіть порядковий номер числа Фібоначчі, яке ви хочете отримати'));
//     i = 2;
//     i++;
//     fiboValue[i]=fiboValue[i-1]+fiboValue[i-2];
// } while ((isNaN(fiboNubmer)) && (fiboNubmer>i)); 

// document.write(fiboValue.slice(-1));



