String.prototype.isPalindrome = function () {
    let tempVar_1 = this.toLowerCase().split(' ').join('');
    let tempVar_2 = tempVar_1.split('').reverse().join('');
    return (tempVar_1 === tempVar_2);
}

function getAverageMark(marks) {

    let roundedAverage = () => {
        let average = 0
        if (marks.length === 0) {
            return average;
        } else {
            for (let i = 0; i < marks.length; i++) {
                average += marks[i];
            }
            average = average / marks.length;
            return Math.round(average);
        }
    }

    return roundedAverage();
}

function checkBirthday(birthday) {

    let now = +new Date();
    let dateUser = new Date(birthday);
    birthday = +dateUser;
    let diff = now - birthday;

    let dateTemp = null;

    if (((dateUser.getFullYear() % 4 === 0) && (dateUser.getFullYear() % 100 !== 0)) || (dateUser.getFullYear() % 400 === 0)) {
        dateTemp = 1000 * 60 * 60 * 24 * 366;
    } else {
        dateTemp = 1000 * 60 * 60 * 24 * 365;
    }

    let age = diff / dateTemp;
    age = Math.floor(age);

    return verdict = age > 18 ? true : false;
}
