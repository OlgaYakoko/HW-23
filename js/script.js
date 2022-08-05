// task#1: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arrFirstNumbers = [1, 2, 3];
const arrSecondNumbers = [4, 5, 6];
const resultConcat = arrFirstNumbers.concat(arrSecondNumbers);

// Task#2 arr [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrRevers = [1, 2, 3];
const resultRevers = arrRevers.reverse([1, 2, 3]);

// Task #3: arr [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arrPush = [1, 2, 3];
const resultPush = arrPush.push(4, 5, 6);

// Task #4: arr [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arrUnshift = [1, 2, 3];
const resultUnshift = arrUnshift.unshift(4, 5, 6);

// Task #5: arr [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.
const arrIndexof = ["js", "css", "jq"];
const resultIndexof = arrIndexof.indexOf("js");
console.log(resultIndexof);

//Task #6 : arr [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.
const resultLastindexof = arrIndexof.lastIndexOf("jq");
console.log(resultLastindexof);

//Task #7: arr [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
const arrSplice = [1, 2, 3, 4, 5];
const resultSplice = arrSplice.splice(0, 0, 1, 2, 3);

//Task #8: arr [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
const arrSpliceNew = [1, 2, 3, 4, 5];
const resultSpliceNew = arrSpliceNew.splice(0, 0, 4, 5);

//Task #9: arr [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
const arrSpliceNumb = [1, 2, 3, 4, 5];
const resultSpliceNumb = arrSpliceNumb.splice(1,2);

//Task #10: arr [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
const arrSpliceAdd = [1, 2, 3, 4, 5];
const resultSpliceAdd = arrSpliceAdd.splice(arrSpliceAdd.length, 0, 2, 3, 4);

//Task# 11: arr [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].
const arrNewSplice = [1, 2, 3, 4, 5];
arrNewSplice.splice(3, 0,'a', 'b', 'c');

//Task#12: arr [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].
const arrSpliseAdd = [1, 2, 3, 4, 5];
arrSpliseAdd.splice(1,0,'a', 'b');
arrSpliseAdd.splice(6,0,'c');
arrSpliseAdd.splice(8,0,'e');

//Task#13: arr [3, 4, 1, 2, 7]. Отсортируйте его.
const arr = [3, 4, 1, 2, 7];
arr.sort();

//Task#14: arr с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const arrAddElem = [5, 6, 7, 8, 9];
let sum = 0;

arrAddElem.forEach((elem) => {
    sum += elem;
});

//Task#15:  arr [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
const arrExponentiation = [5, 6, 7, 8, 9];
let exponentiation = 0;
let resultExponentiation = [];

arrExponentiation.forEach((elem) => {

    exponentiation = elem ** 2;
    resultExponentiation.push(exponentiation);

})

//Task#16: arr [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const arrNumbs = [1,-3, 5, 6,-7, 8, 9,-11];
let positiveNumbs = [];

arrNumbs.forEach((elem) => {

    if (elem > 0) {
        positiveNumbs.push(elem)
    }

});

//Task#17: arr [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
const arrNumbers = [1,-3, 5, 6,-7, 8, 9,-11];
let evenNumbs = [];

arrNumbers.forEach((elem) => {

    if(elem % 2 === 0){
        evenNumbs.push(elem)
    }

});

//Task#18: arr со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const arrStrings = [`aaa`, `aaaqqq`, `zzzqq`, `zz`, `qsaa`, `q`, `az`];
let shotStrings = [];

arrStrings.forEach((elem) => {

    if(elem.length > 5){
        shotStrings.push(elem)
    }
});

//Task#19: Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
const arrArrs = [1, 2, [3, 4], 5, [6, 7]];
let underArrs = [];

arrArrs.forEach((elem) => {

    if(Array.isArray(elem) === true) {
        underArrs.push(elem);
    }
    
});

//Task#20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const arrAllNumbers = [5,-3, 6,-5, 0,-7, 8, 9];
let arrNegativNubs = [];

arrAllNumbers.forEach((elem) => {
    if(elem < 0){

        arrNegativNubs.push(elem)
        
    }
})
const amoutNegativeNumbs = arrNegativNubs.length;
