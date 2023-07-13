// console.log("hello");
// //Safe number - 2^53-1  to 2^53-1
// const a = "5a51111";
// const val = parseInt(a);
// console.log(typeof val, val);
// const b = "5.3frf";
// const val1 = parseFloat(b);
// console.log(typeof val1, val1);

//Strings
//Escape character

// const a = 'A Hi "hello", hello hello, hello. Hi Hi';
// console.log(a);
// console.log(a.length);
// console.log(a.toUpperCase());
// const val = a.indexOf("i");
// const val = a.replaceAll("i", "a");
// const val = a.substring(4, 15);
// const val = a.substr(4, 5);
// const val = a.slice(4, 5);
// const val = a.includes("he");
// const val = a.charCodeAt(0);
// const val = a.split(",");
// const val = a.search("u");
// console.log(val);

//Array[]
// const fruits = ["apple", "zx", "banana", "mango", "orange", "preet", "sahil"];
// const val = ["preet", "sahil"];
// const d = fruits.length;

// console.log(d, fruits);

// fruits.push("kela");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.at(0));
// console.log(fruits.concat(val));
// const arr = fruits.shift();
// fruits.unshift("fff");
// const arr = fruits.toString();
// const arr = fruits.join("|");
// const arr = fruits.slice(1, 2);
// const arr = fruits.splice(1, 0, "rrr");
// fruits.reverse();
// console.log(fruits);
// fruits.sort();
// fruits.sort((a, b) => b - a);
// console.log(arr.split("|"));
// const add = (a, b) => {
//   return a + b;
// };
// const multi = (a, b) => {
//   return a * b;
// };
// const calc = (a, b, func) => func(a, b);

// const data = calc(2, 3, add);
// const calc = (operator) => {
//   if (operator === "+") return add;
//   if (operator === "*") return multi;
// };
// const data = calc("+");

// const data = calc("+")(2, 3);

// console.log(data);
// fruits.forEach((item) => {
//   console.log(item);
// });
// const newarr = fruits.map((item) => {
//     if (item.includes("o")) {
//       return item.toUpperCase();
//     }
//   });
// const newarr = fruits.filter((item) => {
//   if (item.includes("o")) {
//     return item.toUpperCase();
//   }
// });
// const newarr1 = fruits.filter((item) => item.includes("p"));
// console.log(newarr1);
// const bal = [233, 223, 444, 665, 333];
// const tot = bal.reduce((acc, num) => acc + num, 0);
// console.log(tot);
// const data = fruits.find((item) => item === "orange");
// const data = fruits.every((item) => item.includes("p"));
// console.log(data);
// Challenge1

// create 50 random number array from 1 to 100 programmatically.
//sort array in descending order
// get the total value of the array
// divide original array into 2 odd and even array.
//remove duplicate
// const randomnum = () => Math.floor(Math.random() * 100) + 1;

// const arr = [];
// for (let i = 0; i < 50; i++) {
//   arr.push(randomnum());
// }
// console.log(arr);
// const newarr = arr.sort((a, b) => a - b);
// console.log(newarr);

// const total = newarr.reduce((acc, num) => acc + num, 0);
// console.log(total);
// const even = newarr.filter((item) => item % 2 === 0);

// const odd = newarr.filter((item) => item % 2 !== 0);
// newarr.forEach((item) => {
//   if (item % 2 === 0) {
//     even.push(item);
//   } else {
//     odd.push(item);
//   }
// });

// console.log(even);
// console.log(odd);
// const t = [1, 3, 1, 5, 6, 5];
// console.log(
//   t.filter((item, i) => {
//     if (t.indexOf(item) === i) {
//       console.log(i);
//       return item;
//     }
//   })
// // );

// const removeDup = (array1) => {
//   return array1.filter((item, i) => {
//     if (array1.indexOf(item) === i) {
//       return item;
//     }
//   });
// };

// console.log(removeDup(even));
// console.log(removeDup(odd));

// console.log("challenge 2");
//Challenge2
//create 50 unique random numbers .

// const uniarr = [];
// var u;
// for (let i = 0; uniarr.length < 50; i++) {
//   u = randomnum();
//   if (!uniarr.includes(u)) {
//     uniarr.push(u);
//   }
// }
// while (uniarr.length < 50) {
//   u = randomnum();
//   !uniarr.includes(u) && uniarr.push(u) ;
// }
// console.log(uniarr);
//Objects

// const mobile = {
//   brand: "samsung",
//   color: "black",
//   price: 10,
//   isItBroken: "no",
//   dial: () => {
//     console.log("calling to me");
//   },
// };
// const val = mobile["brand"];
// console.log(val);
// mobile.useAsHammer = "no";
// mobile.price = 1200;
// delete mobile.dial;
// console.log(mobile);
// Destructuring ...

// const { brand, color } = mobile;
// console.log(brand, color);

// const person = {
//   name: "preet",
//   add: "bonner",
//   age: 16,
//   // dad: "gr",
//   // mom: "gp",
// };
// const parent = {
//   dad: "gr",
//   mom: "gp",
// };
// const nobj = { ...person, ...parent };
// console.log(nobj);

// const parentdetails = ({ dad, mom }) => {
//   return `father is ${dad} and mother is ${mom}`;
// };
// const bio = (personobj) => {
//   return `Hi there my name is ${personobj["name"]} i live in ${personobj["add"]}  and my age is ${personobj["age"]} `;
// };
// const bio = ({ name, add = "N/a", age, ...rest }) => {
//   // const { name, add, age } = personobj;
//   return (
//     `Hi there my name is ${name} i live in ${add}  and my age is ${age} ` +
//     parentdetails(rest)
//   );
// };
// const result = bio(person);
// console.log(result);
// //Default, REST and Spread
// const person1 = {
//   name: "preet",
//   age: 16,
// };
// const result1 = bio(person1);
// console.log(result1);
// object to array

// looping an object
// const arrayKeys = Object.keys(nobj);
// const arrayval = Object.values(nobj);
// console.log(arrayKeys);
// console.log(arrayval);
// arrayKeys.forEach((item) => console.log(item, " ", nobj[item]));
// for (const item in nobj) {
//   console.log(nobj[item]);
// }
//Date functions
// const dt = date();
// connst dt=Date.now();
// const dt = new Date();
// const nextweek = dt.setDate(dt.getDate() + 7);
// const fd = nextweek.toDateString();
// console.log(dt);
// Challenge
// Create a function that takes food name and expiry date and return like xyz is expired for this much days left for expiry

// const CheckExpiry = ({ name, expire }) => {
//   const dt = Date.now();
//   const obj = new Date(expire);
//   const exp = obj.getTime();
//   const dtd = new Date();
//   let s = obj.getDate() - dtd.getDate();
//   if (exp > dt) {
//     console.log(
//       name.toUpperCase() + " is fresh and will expire in " + s + " days"
//     );
//   } else if (s === 0) {
//     console.log(name.toUpperCase() + " is expiring today");
//   } else {
//     console.log(name.toUpperCase() + " is expired " + -s + " days ago");
//   }
// };
// const fish = {
//   name: "tuna fish",
//   expire: "2023-07-05",
// };
// const milk = {
//   name: "Can Milk",
//   expire: "2023-07-15",
// };
// CheckExpiry(fish);
// CheckExpiry(milk);
// const person = (name, add) => {
//   return {
//     personName: name,
//     address: add,
//     bio() {
//       return `hey, this person name is ${this.personName}`;
//     },
//     location() {
//       return `he lives in ${this.address}`;
//     },
//     toUpper() {
//       this.personName = this.personName.toUpperCase();
//       return this.personName;
//     },
//   };
// };
// const obj1 = person("prem", "sydney");
// console.log(obj1.bio());
// console.log(obj1.toUpper());
// console.log(obj1.bio());
//Class
// class Person {
//   #key;
//   constructor(obj) {
//     this.name = obj.name;
//     this.add = obj.add;
//     this.#key = "dfekjnfjerfjer3273";
//   }
//   bio() {
//     return `Hey this person name is ${this.name}.`;
//   }
//   location() {
//     return `He lives in ${this.add}`;
//   }
//   #callApi() {
//     return "aPi key is => " + this.#key;
//   }
//   finddata() {
//     ////
//     return "Data from api " + this.#callApi();
//   }
// }
// const probj = {
//   name: "prem",
//   add: "syd",
//   pet: "monkey",
// };
// const obj = new Person(probj);
// obj.phone = 2982;

// console.log(obj.bio());
// class LivingObj {
//   constructor(name, dob, isMamal) {
//     this.name = name;
//     this.dob = dob;
//     this.isMamal = isMamal;
//   }
//   bio() {
//     return `The animal is called ${this.name}, was born on ${this.dob} and thier mamal status is ${this.isMamal}`;
//   }
// }
// const cat = new LivingObj("whisper", "2020-02-10", "yes");
// console.log(cat.bio());
// class Human extends LivingObj {
//   constructor(name, dob, isMamal) {
//     super(name, dob, isMamal);
//   }
//   speak() {
//     return ` ${this.bio()} and they speak as well`;
//   }
// }
// class Animal extends LivingObj {
//   constructor(name, dob, isMamal, owner) {
//     super(name, dob, isMamal);
//     this.owner = owner;
//   }
//   owneris() {
//     return `${this.bio()} and belongs to ${this.owner}`;
//   }
// }
// const permobj = new Human("prem", "20-20-20", "yes");
// console.log(permobj.speak());
// const cat = new Animal("whisper", "20-10-10", "not", "justin");
// console.log(cat.owneris());
// var date1 = new Date("2020-07-6");
// var date2 = new Date();
// console.log(date1 + ".//////////////////. " + date2);
// console.log(
//   "numberof years to date: " + (date2.getFullYear() - date1.getFullYear())
// );
// console.log("number of months: " + (date2.getMonth() - date1.getMonth()));
// console.log("number of days: " + (date2.getDate() - date1.getDate()));

// Functions
// Pure functions
// let total = 0;
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(5, 6));
//High order function\
// const addandsquare = (a, b) => {
//   const total = a + b;
//   console.log(total);
//   return (multiplier) => {
//     return total ** multiplier;
//   };
// };
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => [a - b];
// const calc = (a, b, func) => {
//   return func(a, b);
// };

// const result = calc(2, 3, addandsquare);
// console.log(result(2));
//Recursion
// let i = 0;
// var num = 0;
// const total = (money) => {
//   num = num + money.pop();
//   console.log(money);
//   if (money.length === 0) {
//     return num;
//   }
//   return total(money);
// };
// const money = [34546, 34356, 434, 234678, 4356];
// const a = total(money);
// console.log(a);
// const milarg = Array(11400).fill(1);

// console.log(milarg);
// console.time("reduce");
// milarg.reduce((a, i) => a + i, 0);
// console.timeEnd("reduce");

// console.time("recursive");
// let tl = 0;
// const ttl = (arg) => {
//   tl += arg.pop();
//   if (arg.length === 0) {
//     return tl;
//   }
//   return ttl(arg);
// };
// console.log(ttl(milarg));
// console.timeEnd("recursive");
