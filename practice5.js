let firstNumber = Number(prompt('Введіть перше число:'));
let secondNumber = Number(prompt('Введіть друге число:'));

let choseNum = (x,y) => {
    (x > y) ? result = (x+y):
    (x < y) ? result = (x*y):
    result = (x, y); return result}

alert(choseNum(firstNumber, secondNumber));