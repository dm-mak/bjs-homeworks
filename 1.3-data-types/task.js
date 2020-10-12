"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    console.log(isNaN(percent));
    console.log(isNaN(contribution));
    console.log(isNaN(amount));

    if (isNaN(percent) === false && isNaN(contribution) === false && isNaN(amount) === false) {
        let amountCredit = amount - contribution; //тело кредита (сумма котору нужно вернуть)
        let creditTerm = Math.floor((date - new Date()) / 2592000000); // срок кредита
        let monthlyInterest = (percent / 100) / 12;
        let monthlyPayment = amountCredit * (monthlyInterest + monthlyInterest / (((1 + monthlyInterest) ** creditTerm) - 1));
        let totalAmount = monthlyPayment * creditTerm;
        console.log(totalAmount);
        return Number(totalAmount.toFixed(2));
    } else {
        switch (true) {
            case isNaN(percent):
                return `В поле "проценты" не число`;
                break;
            case isNaN(contribution):
                return `В поле "начальный платеж" не число`;
                break;
            case isNaN(amount):
                return `В поле "Общая стоимость" не число`;
                break;
            default:
                return `Что-то введено неправильно`;
                break;
        }
    }
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;

    let greeting;

    function inputName() {
        let altName;
        if (!name || name === "") {
            altName = 'Аноним';
            return altName;
        } else {
            return name;
        }
    }

    greeting = `Привет, мир! Меня зовут ${inputName()}`;
    return greeting;
}