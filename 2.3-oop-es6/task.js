// Задача №1 
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = 100,
        this.type = null
    }

    set state(value) {
        let statevalue = null;
        if (value < 0) {
            statevalue = 0;
        } else if (value > 100) {
            statevalue = 100;
        } else {
            statevalue = value;
        }

        this._state = statevalue;
    }

    get state() {
        return this._state;
    }

    fix() {
        let modif = this.state * 1.5;
        return this.state = modif;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = 'book'
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
}


// Задача №2
class Library {
    constructor(name) {
        this.name = name,
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let _findBookBy;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                _findBookBy = this.books[i];
            } else {
                _findBookBy = null;
            }
        }
        return _findBookBy;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i += 1) {
          if (this.books[i].name === bookName) {
            return this.books.splice(i,1)[0];
          }
        }
        return null;
      }
}


// Задача №3

class StudentLog {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this[subject] == undefined) {
            this[subject] = []
        }
        if ( typeof grade == 'number' && (0 < grade && grade < 6)) {
            this[subject].push(grade);
            return this[subject].length;
        } else {
            console.log (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
            return this[subject].length;
        }
    }

    getAverageBySubject(subject) {
        let countMark = null;
        if (this[subject] == undefined) {
            return 0;
        } else {
            for (let i = 0; i < this[subject].length; i++) {
                countMark += this[subject][i]
            }
        }
        return countMark / this[subject].length;
    }

    getTotalAverage() {
        let sumMarks = null;
        let sumCount = 0;
        for (let key in this) {
                if (typeof this[key] === 'object') {
                    for (let i = 0; i < this[key].length; i++) {
                        sumMarks += this[key][i]
                        sumCount++;
                    }
                }
            }
            return sumMarks / sumCount;
        }
}
