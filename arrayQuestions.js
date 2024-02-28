// Massiv qanday yaratiladi?

// Yangi massiv yaratish uchun biz massiv literal sintaksisidan foydalanishimiz mumkin:
let arr = [];

console.log(arr, typeof arr);

// Array konstruktoridan ham foydalanishimiz mumkin:
let arr2 = new Array();

console.log(arr2, typeof arr2);

// Massivning elementlariga qanday kirish mumkin?

// Massivdagi elementga kirish uchun biz array[index] dan foydalanishimiz kerak, bunda array bizning massiv va [index] (0 dan boshlanadi) biz kirishni istagan element indeksi:
let arr3 = [1, 2, 3];

console.log(arr[-1]); // undefined
console.log(arr3[0]); // 1
console.log(arr3[1]); // 2
console.log(arr3[2]); // 3
console.log(arr3[3]); // undefined

// Massivning birinchi va oxirgi elementlariga qanday kirish mumkin?

// Uning uchun biz yanada array[index] dan foydalanamiz, faqat .length ni ham ishlatamiz
console.log(arr3[0]); // birinchi element = 1
console.log(arr3[arr3.length - 1]); // ohirgi element = 3

// Massiv oxiriga elementni qanday qo'shish mumkin?

// Massivga ohiridan yangi element qoshish uchun array.push(el) metodini ishlatamiz
let arr4 = [4, 2, 8];
arr4.push(5);

console.log(arr4); // [5, 2, 8, 4]

// Massivdan oxirgi elementni qanday olib tashlash mumkin?

// Uning uchun array.pop() metodini ishlatamiz, u ozini ichiga qiymat olmaydi, yozsez barbirham ohiridan bitta element yoq qilibtashlaydi
arr4.pop();

console.log(arr4); // [5, 2, 8]

// JavaScript-da massivni qanday aylanibchiqasiz?

// Uning uchun for ni ishlatamiz
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]); // arr4 ni hamma elementlarini korsatibchiqadi - [5, 2, 8]
}

// Massivda element mavjudligini qanday tekshirish mumkin?

// Uning uchun birinchidan theElement digan ozgaruvchi ochamiz, u bizani resultatimiz deb hisoblasak boladi.
// Undan keyin arrayni aylanib chiqamiz va bizning elementimiz bizning arrayimizni harbir soniga tengmi degan holat qoyamiz.
// Agar bunaqa holat bor bolsa theElement ni shunaqa yoziq bor ga oxshagan matnga tenglabqoyvommiz va ishni toxtatvoramiz.
// Agar birinchi holatga tushmasdan ikkinchi holatga tushibqolsa, u holat arrayimizni harbir raqami bizning sonimizga tengmas bolishi,
// Unda theElement ni Bunaqa element arrayimizda yoq degan matnga tenglabqoyvommiz.
// Keyingi ikkita holatda agar Error yoki hechqaysi holatga tushmalsa nimadur notog'ri ketdi degan matn chiqarvommiz va loyihani to'xtatvommiz.

let theElement;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] == 4) {
    theElement = `The element ${arr4[i]} is in array!`;
    break;
  } else if (arr4[i] != 4) {
    theElement = "The element is not in array!";
  } else if (Error) {
    console.log("Something went wrong!");
    break;
  } else {
    console.log("Something went wrong!");
    break;
  }
}

console.log(theElement);
