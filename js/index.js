
let fiboNubmer;
let fiboValue = [];
fiboValue[0] = 1;
fiboValue[1] = 1;
let i = 2;

do {
    alert('введіть будь ласка числове значення');
    fiboNubmer = parseFloat(prompt('Введіть порядковий номер числа Фібоначчі, яке ви хочете отримати'));
} while (isNaN(fiboNubmer)); 
for (let i = 2; i < fiboNubmer; i++) {
    fiboValue[i]=fiboValue[i-1]+fiboValue[i-2];
}
document.write(fiboValue.slice(-1));

