/* 1. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня 
українською мовою */

const DAYS_OF_WEEK = {
  1: "Понеділок",
  2: "Вівторок",
  3: "Середа",
  4: "Четверг",
  5: "П'ятниця",
  6: "Субота",
  7: "Неділя",
};

function getDate(number) {
  return DAYS_OF_WEEK[number] || "Введіть валідний день тижня";
}

console.log(getDate(2)); //вівторок, зі switch код виходить занадто довгим :(
console.log(getDate(666)); //"Введіть валідний день тижня", якщо користувач вводить неправильну дату

/*2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'.*/

let str = "var_text_hello";
str = str
  .split("_")
  .map((item) => item[0].toUpperCase() + item.slice(1))
  .join("");
console.log(str); //VarTextHello

/* 3. Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу. */

let arr = [];

function fillArray(number) {
  for (let i = 0, n = number; i < n; i++) {
    arr.push("x");
  }
}

fillArray(6); /*по умові має виводити 10 "х", але я свідомо роблю її типу утилітною, щоб вона виводила
кількість, яка вказується в параметрі */
console.log(arr);

/* 4. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо 
функцію, яка виводить два! */

let a = 22;
let ggg;

a > 0 ? (ggg = () => console.log(1)) : (ggg = () => console.log(2));
ggg();

/* 5. Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, 
яка повертає 4. Поверніть результатом функції ggg суму 3 та 4 */

function sum(fn1, fn2) {
  return fn1() + fn2();
}

console.log(
  sum(
    () => 3,
    () => 4
  )
);

/* 6. Написати функцію яка порівнює два масиви, якщо вони 
ідентичні тоді повертаємо true інакше false */

let array = ["a", "b", "c", "d", "e"];
let array1 = ["a", "b", "c"];
let array2 = ["a", "b", "c", "d", "f"]; 
let array3 = ["a", "b", "c", "d", "f"]; 

function compareArrays (arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(compareArrays(array, array2)); //false
console.log(compareArrays(array2, array3)); //true

/* 7. Написати функцію яка розбиває масив на підмасиви  за заданим розміром. 
Приклад ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] */ 

let newArray = [1, 2, 3, 4, 5];
let slicedArray = [];

function sliceArray (array, number) {
  for (let i = 0, len = array.length; i < len; i += number) { 
    //len поставлена зумисно, щоб на кожній ітерації не вираховувати довжину масиву
    slicedArray.push(array.slice(i, i + number))
  }

  return slicedArray;
}

console.log(sliceArray(newArray, 2)); //були намагання вирішити через reduce але трошк не вийшло