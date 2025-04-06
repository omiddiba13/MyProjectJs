// 📘 مروری جامع بر متدهای مهم در JavaScript: آرایه‌ها، رشته‌ها، اعداد، تاریخ، توابع، Promise، Map، Set و JSON

// ========================================================================
//                                 آرایه‌ها (Arrays)
// ========================================================================

// 🧱 ساخت آرایه اولیه
const arrayMethods = ["a", "b", "c", "d"];
console.log("آرایه اولیه:", arrayMethods); // خروجی: آرایه اولیه: [ 'a', 'b', 'c', 'd' ]

// 🔹 افزودن و حذف عناصر

// `push()`: اضافه کردن عنصر به انتهای آرایه
arrayMethods.push("e", "f", "g", "h"); // عناصر 'e', 'f', 'g', 'h' به انتهای آرایه اضافه می‌شوند.
console.log("بعد از push:", arrayMethods); // خروجی: بعد از push: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]

// `pop()`: حذف آخرین عنصر از آرایه
arrayMethods.pop(); // آخرین عنصر ('h') از آرایه حذف می‌شود.
console.log("بعد از pop:", arrayMethods); // خروجی: بعد از pop: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// `shift()`: حذف اولین عنصر از آرایه
arrayMethods.shift(); // اولین عنصر ('a') از آرایه حذف می‌شود.
console.log("بعد از shift:", arrayMethods); // خروجی: بعد از shift: [ 'b', 'c', 'd', 'e', 'f', 'g' ]

// `unshift()`: اضافه کردن عنصر به ابتدای آرایه
arrayMethods.unshift("z"); // عنصر 'z' به ابتدای آرایه اضافه می‌شود.
console.log("بعد از unshift:", arrayMethods); // خروجی: بعد از unshift: [ 'z', 'b', 'c', 'd', 'e', 'f', 'g' ]

console.log("\n**نتیجه نهایی آرایه پس از افزودن و حذف:**", arrayMethods);
// خروجی: **نتیجه نهایی آرایه پس از افزودن و حذف:** [ 'z', 'b', 'c', 'd', 'e', 'f', 'g' ]

// 🔸 ترکیب و برش آرایه‌ها

const arrayMethods2 = ["a", "b", "c", "d"];
console.log("\nآرایه دوم:", arrayMethods2); // خروجی: آرایه دوم: [ 'a', 'b', 'c', 'd' ]

// `concat()`: ترکیب دو یا چند آرایه و ایجاد یک آرایه جدید
const combinedArray = arrayMethods2.concat(arrayMethods); // آرایه‌های arrayMethods2 و arrayMethods با هم ترکیب می‌شوند.
console.log("آرایه ترکیب شده با concat:", combinedArray);
// خروجی: آرایه ترکیب شده با concat: [ 'a', 'b', 'c', 'd', 'z', 'b', 'c', 'd', 'e', 'f', 'g' ]

// `slice()`: استخراج بخشی از آرایه و ایجاد یک آرایه جدید (بدون تغییر آرایه اصلی)
const slicedArray = combinedArray.slice(2, 6); // عناصر از ایندکس 2 (شامل) تا 6 (غیر شامل) استخراج می‌شوند.
console.log("آرایه برش خورده با slice(2, 6):", slicedArray);
// خروجی: آرایه برش خورده با slice(2, 6): [ 'c', 'd', 'z', 'b' ]

// ✂️ استفاده از `splice()` برای حذف و جایگزینی عناصر (تغییر آرایه اصلی)

const splicedArray = [...combinedArray]; // ایجاد یک کپی سطحی از آرایه اصلی برای جلوگیری از تغییر آرایه اصلی در مثال
console.log("\nآرایه کپی شده برای splice:", splicedArray);
// خروجی: آرایه کپی شده برای splice: [ 'a', 'b', 'c', 'd', 'z', 'b', 'c', 'd', 'e', 'f', 'g' ]

// `splice(start, deleteCount, ...items)`: تغییر آرایه با حذف و/یا جایگزینی عناصر
splicedArray.splice(4, 2, "x", "y"); // از ایندکس 4، 2 عنصر ('z' و 'b') حذف می‌شوند و 'x' و 'y' جایگزین می‌شوند.
console.log("آرایه بعد از splice(4, 2, 'x', 'y'):", splicedArray);
// خروجی: آرایه بعد از splice(4, 2, 'x', 'y'): [ 'a', 'b', 'c', 'd', 'x', 'y', 'c', 'd', 'e', 'f', 'g' ]

// 🔁 متدهای `map()` و `filter()` برای پردازش آرایه‌ها

const mapArray = splicedArray
  .map((item) => item.toUpperCase()) // `map()`: اعمال یک تابع بر روی هر عنصر و ایجاد آرایه جدید با نتایج. اینجا همه حروف به بزرگ تبدیل می‌شوند.
  .filter((item) => item !== "D" && item !== "F"); // `filter()`: ایجاد آرایه جدید با عناصری که شرط تابع را برآورده می‌کنند. اینجا 'D' و 'F' حذف می‌شوند.

console.log("\nآرایه بعد از map و filter:", mapArray);
// خروجی: آرایه بعد از map و filter: [ 'A', 'B', 'C', 'X', 'Y', 'C', 'E', 'G' ]

// 🔍 متدهای جست‌وجو در آرایه‌ها

// `find()`: پیدا کردن اولین عنصری که شرط تابع را برآورده می‌کند و برگرداندن آن (اگر پیدا نشد `undefined` برمی‌گرداند).
const findArray = mapArray.find((item) => item === "X"); // پیدا کردن اولین عنصر برابر با "X".
console.log("نتیجه find('X'):", findArray); // خروجی: نتیجه find('X'): X

// `findIndex()`: پیدا کردن ایندکس اولین عنصری که شرط تابع را برآورده می‌کند و برگرداندن ایندکس آن (اگر پیدا نشد `-1` برمی‌گرداند).
const findIndexArray = mapArray.findIndex((item) => item === "X"); // پیدا کردن ایندکس اولین عنصر برابر با "X".
console.log("نتیجه findIndex('X'):", findIndexArray); // خروجی: نتیجه findIndex('X'): 3

// `every()`: بررسی اینکه آیا همه عناصر آرایه شرط تابع را برآورده می‌کنند (برگرداندن `true` یا `false`).
const everyArray = mapArray.every((item) => item.length === 1); // بررسی اینکه آیا همه عناصر تک حرفی هستند.
console.log("نتیجه every(item.length === 1):", everyArray); // خروجی: نتیجه every(item.length === 1): true

// `some()`: بررسی اینکه آیا حداقل یک عنصر آرایه شرط تابع را برآورده می‌کند (برگرداندن `true` یا `false`).
const someArray = mapArray.some((item) => item.length === 2); // بررسی اینکه آیا حداقل یک عنصر دو حرفی وجود دارد.
console.log("نتیجه some(item.length === 2):", someArray); // خروجی: نتیجه some(item.length === 2): false

// 🔢 کار با آرایه‌های عددی

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nآرایه عددی اولیه:", numberArray); // خروجی: آرایه عددی اولیه: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// `reduce()`: اعمال یک تابع کاهشی بر روی عناصر آرایه و تبدیل آن به یک مقدار واحد (مانند جمع، ضرب و غیره).
const sum = numberArray.reduce((acc, num) => acc + num, 0); // جمع تمام اعداد آرایه. `acc` مقدار تجمیع شده و `num` عنصر فعلی است. `0` مقدار اولیه accumulator است.
console.log("جمع اعداد با reduce:", sum); // خروجی: جمع اعداد با reduce: 55

// `forEach()`: اجرای یک تابع برای هر عنصر آرایه (مشابه حلقه `for`، اما مختصرتر برای آرایه‌ها).
const copiedArray = [...numberArray]; // ایجاد کپی سطحی از آرایه اصلی
const incrementedArray = [];

copiedArray.forEach((item) => {
  incrementedArray.push(item + 1); // افزایش هر عدد به اندازه 1 و اضافه کردن به آرایه جدید.
});

console.log("\nآرایه اصلی:", numberArray);
console.log("آرایه کپی شده با افزایش 1:", incrementedArray);
// خروجی:
// آرایه اصلی: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// آرایه کپی شده با افزایش 1: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// `indexOf()`: پیدا کردن ایندکس اولین رخداد یک عنصر مشخص در آرایه (اگر پیدا نشد `-1` برمی‌گرداند).
const indexOf = numberArray.indexOf(5); // پیدا کردن ایندکس عدد 5.
console.log("ایندکس عدد 5 با indexOf:", indexOf); // خروجی: ایندکس عدد 5 با indexOf: 4

// `reverse()`: برعکس کردن ترتیب عناصر آرایه (تغییر آرایه اصلی).
const reversedArray = [...numberArray].reverse(); // برعکس کردن آرایه (ابتدا کپی می‌کنیم تا آرایه اصلی تغییر نکند).
console.log("آرایه برعکس شده با reverse:", reversedArray);
// خروجی: آرایه برعکس شده با reverse: [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// `sort()`: مرتب‌سازی عناصر آرایه (تغییر آرایه اصلی).
const sortedArray = [...numberArray].sort((a, b) => {
  // مرتب‌سازی به صورت سفارشی: اعداد زوج اول، سپس اعداد فرد.
  if (a % 2 === 0 && b % 2 !== 0) return -1; // اگر a زوج و b فرد باشد، a قبل از b قرار می‌گیرد.
  if (a % 2 !== 0 && b % 2 === 0) return 1; // اگر a فرد و b زوج باشد، b قبل از a قرار می‌گیرد.
  return 0; // در غیر این صورت ترتیب تغییری نمی‌کند.
});
console.log("آرایه مرتب شده با sort سفارشی:", sortedArray);
// خروجی: آرایه مرتب شده با sort سفارشی: [ 2, 4, 6, 8, 10, 1, 3, 5, 7, 9 ]

// `join()`: تبدیل آرایه به رشته با استفاده از جداکننده مشخص شده.
const joinedArray = numberArray.join(", "); // تبدیل آرایه به رشته با جداکننده ", ".
console.log("آرایه تبدیل شده به رشته با join(', '):", joinedArray);
// خروجی: آرایه تبدیل شده به رشته با join(', '): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// `flat()`: مسطح کردن آرایه‌های تودرتو تا عمق مشخص (به صورت پیش‌فرض عمق 1).
const deeplyNestedArray = [1, [2, [3, 4]], 5];
console.log("\nآرایه تودرتو:", deeplyNestedArray); // خروجی: آرایه تودرتو: [ 1, [ 2, [ 3, 4 ] ], 5 ]
const flatArray = deeplyNestedArray.flat(); // مسطح کردن آرایه تا عمق 1.
console.log("آرایه مسطح شده با flat():", flatArray);
// خروجی: آرایه مسطح شده با flat(): [ 1, 2, [ 3, 4 ], 5 ]

// `fill()`: پر کردن بخشی از آرایه با یک مقدار ثابت (تغییر آرایه اصلی).
const filledArray = [...numberArray].fill(0, 4, 6); // پر کردن ایندکس‌های 4 و 5 با مقدار 0 (از ایندکس 4 شامل تا 6 غیر شامل).
console.log("آرایه پر شده با fill(0, 4, 6):", filledArray);
// خروجی: آرایه پر شده با fill(0, 4, 6): [ 1, 2, 3, 4, 0, 0, 7, 8, 9, 10 ]

// ========================================================================
//                                رشته‌ها (Strings)
// ========================================================================
console.log("\n\n==================== متدهای رشته‌ای ====================");

const stringMethods = "Hello, World!";
const stringMethods2 = "Hello, World!"; // رشته‌ای دیگر

console.log("رشته اصلی:", stringMethods); // خروجی: رشته اصلی: Hello, World!

// 1. `charAt(index)`: دریافت کاراکتر در ایندکس مشخص.
const CharAt = stringMethods.charAt(0); // دریافت کاراکتر در ایندکس 0 ('H').
console.log("charAt(0):", CharAt); // خروجی: charAt(0): H

// 2. `charCodeAt(index)`: دریافت کد یونیکد کاراکتر در ایندکس مشخص.
const charAtCode = [...stringMethods].map((Characters) =>
  Characters.charCodeAt(0),
); // دریافت کد یونیکد برای هر کاراکتر در رشته.
console.log("charCodeAt هر کاراکتر:", charAtCode);
// خروجی: charCodeAt هر کاراکتر: [
//   72, 101, 108, 108,
//   111, 44,  32,  87,
//   111, 114, 108, 100,
//   33
// ]

// 3. `concat(str1, str2, ...)`: ترکیب دو یا چند رشته و ایجاد یک رشته جدید.
const concat = stringMethods.concat(stringMethods2); // ترکیب stringMethods با stringMethods2.
console.log("concat(stringMethods2):", concat); // خروجی: concat(stringMethods2): Hello, World!Hello, World!

// 4. `includes(substring, start?)`: بررسی وجود یک زیررشته در رشته (برگرداندن `true` یا `false`).
const includes = stringMethods.includes("World"); // بررسی وجود زیررشته "World".
console.log("includes('World'):", includes); // خروجی: includes('World'): true

// 5. `indexOf(substring, start?)`: پیدا کردن ایندکس اولین رخداد یک زیررشته در رشته (اگر پیدا نشد `-1` برمی‌گرداند).
const indexOfString = stringMethods.indexOf("o"); // پیدا کردن ایندکس اولین 'o'.
console.log("indexOf('o'):", indexOfString); // خروجی: indexOf('o'): 4

// 6. `lastIndexOf(substring, start?)`: پیدا کردن ایندکس آخرین رخداد یک زیررشته در رشته (اگر پیدا نشد `-1` برمی‌گرداند).
const lastIndexOfString = stringMethods.lastIndexOf("o"); // پیدا کردن ایندکس آخرین 'o'.
console.log("lastIndexOf('o'):", lastIndexOfString); // خروجی: lastIndexOf('o'): 8

// 7. `replace(pattern, replacement)`: جایگزینی اولین رخداد یک الگو با یک رشته جدید (الگو می‌تواند رشته یا Regular Expression باشد).
const replaceString = stringMethods.replace("World", "JavaScript"); // جایگزینی اولین "World" با "JavaScript".
console.log("replace('World', 'JavaScript'):", replaceString); // خروجی: replace('World', 'JavaScript'): Hello, JavaScript!

// 8. `replaceAll(pattern, replacement)`: جایگزینی تمام رخدادهای یک الگو با یک رشته جدید (الگو می‌تواند رشته یا Regular Expression باشد).
const replaceAllString = stringMethods.replaceAll("World", "JavaScript"); // جایگزینی تمام "World"ها با "JavaScript".
console.log("replaceAll('World', 'JavaScript'):", replaceAllString); // خروجی: replaceAll('World', 'JavaScript'): Hello, JavaScript!

// 9. `slice(start, end?)`: استخراج بخشی از رشته و ایجاد یک رشته جدید (بدون تغییر رشته اصلی).
const sliceString = stringMethods.slice(0, 5); // استخراج از ایندکس 0 (شامل) تا 5 (غیر شامل).
console.log("slice(0, 5):", sliceString); // خروجی: slice(0, 5): Hello

// 10. `split(separator, limit?)`: تبدیل رشته به آرایه بر اساس جداکننده مشخص شده.
const splitString = stringMethods.split(" "); // تقسیم رشته بر اساس فاصله.
console.log("split(' '):", splitString); // خروجی: split(' '): [ 'Hello,', 'World!' ]

// 11. `toLowerCase()`: تبدیل رشته به حروف کوچک.
const toLowerCaseString = stringMethods.toLowerCase(); // تبدیل به حروف کوچک.
console.log("toLowerCase():", toLowerCaseString); // خروجی: toLowerCase(): hello, world!

// 12. `toUpperCase()`: تبدیل رشته به حروف بزرگ.
const toUpperCaseString = stringMethods.toUpperCase(); // تبدیل به حروف بزرگ.
console.log("toUpperCase():", toUpperCaseString); // خروجی: toUpperCase(): HELLO, WORLD!

// 13. `trim()`: حذف فاصله‌های اضافی ابتدا و انتهای رشته.
const trimString = "  Hello, World!  ".trim(); // حذف فاصله‌های ابتدا و انتها.
console.log("trim():", trimString); // خروجی: trim(): Hello, World!

// 14. `trimStart()` / `trimLeft()`: حذف فاصله‌های اضافی ابتدای رشته.
const trimStartString = "  Hello, World!  ".trimStart(); // حذف فاصله‌های ابتدا.
console.log("trimStart():", trimStartString); // خروجی: trimStart(): Hello, World!

// 15. `trimEnd()` / `trimRight()`: حذف فاصله‌های اضافی انتهای رشته.
const trimEndString = "  Hello, World!  ".trimEnd(); // حذف فاصله‌های انتها.
console.log("trimEnd():", trimEndString); // خروجی: trimEnd():   Hello, World!

// 16. `padStart(targetLength, padString?)`: اضافه کردن کاراکتر به ابتدای رشته تا رسیدن به طول مشخص.
const padStartString = "5".padStart(3, "0"); // اضافه کردن '0' به ابتدا تا طول رشته 3 شود.
console.log("padStart(3, '0'):", padStartString); // خروجی: padStart(3, '0'): 005

// 17. `padEnd(targetLength, padString?)`: اضافه کردن کاراکتر به انتهای رشته تا رسیدن به طول مشخص.
const padEndString = "5".padEnd(3, "0"); // اضافه کردن '0' به انتها تا طول رشته 3 شود.
console.log("padEnd(3, '0'):", padEndString); // خروجی: padEnd(3, '0'): 500

// 18. `repeat(count)`: تکرار رشته به تعداد مشخص.
const repeatString = "Hello! ".repeat(3); // تکرار رشته "Hello! " 3 بار.
console.log("repeat(3):", repeatString); // خروجی: repeat(3): Hello! Hello! Hello!

// ========================================================================
//                                اعداد (Numbers)
// ========================================================================
console.log("\n\n==================== متدهای عددی ====================");

const numberMethods = 1234567890.123456789;
console.log("عدد اصلی:", numberMethods); // خروجی: عدد اصلی: 1234567890.1234568

// `toFixed(digits)`: تبدیل عدد به رشته با تعداد رقم اعشار مشخص شده.
const tofixedNumber = numberMethods.toFixed(2); // تبدیل به رشته با 2 رقم اعشار.
console.log("toFixed(2):", tofixedNumber); // خروجی: toFixed(2): 1234567890.12

// `toPrecision(precision)`: تبدیل عدد به رشته با تعداد کل ارقام معنی‌دار مشخص شده.
const toPrecisionNumber = numberMethods.toPrecision(5); // تبدیل به رشته با 5 رقم معنی‌دار.
console.log("toPrecision(5):", toPrecisionNumber); // خروجی: toPrecision(5): 1.2346e+9

// `toExponential(fractionDigits)`: تبدیل عدد به رشته در فرم نمایی (e-notation) با تعداد رقم اعشار مشخص شده.
const toExponentialNumber = numberMethods.toExponential(2); // تبدیل به فرم نمایی با 2 رقم اعشار.
console.log("toExponential(2):", toExponentialNumber); // خروجی: toExponential(2): 1.23e+9

// `toString(radix?)`: تبدیل عدد به رشته با مبنای مشخص (مبنای پیش‌فرض 10).
const toStraingNumber = numberMethods.toString(); // تبدیل به رشته (مبنای 10 پیش‌فرض).
console.log("toString():", toStraingNumber); // خروجی: toString(): 1234567890.1234568

// `valueOf()`: برگرداندن مقدار اولیه یک شیء Number (به ندرت استفاده می‌شود).
const toValueNumber = numberMethods.valueOf(); // برگرداندن مقدار اولیه عدد.
console.log("valueOf():", toValueNumber); // خروجی: valueOf(): 1234567890.1234568

// ========================================================================
//                                تاریخ (Date)
// ========================================================================
console.log("\n\n==================== متدهای تاریخ ====================");

const dataMethods = new Date(); // ایجاد شیء Date با تاریخ و زمان فعلی.
console.log("تاریخ فعلی:", dataMethods); // خروجی: تاریخ فعلی: 2023-10-27T14:35:52.987Z (زمان و تاریخ فعلی)

// `toDateString()`: تبدیل تاریخ به رشته با فرمت قابل خواندن (روز ماه سال).
const toDateString = dataMethods.toDateString(); // تبدیل به رشته تاریخ (مثال: "Fri Oct 27 2023").
const fullYear = dataMethods.getFullYear(); // دریافت سال (4 رقمی).
const month = dataMethods.getMonth(); // دریافت ماه (0-11، 0 = ژانویه).
const date = dataMethods.getDate(); // دریافت روز ماه (1-31).
const day = dataMethods.getDay(); // دریافت روز هفته (0-6، 0 = یکشنبه).
const hours = dataMethods.getHours(); // دریافت ساعت (0-23).
const minutes = dataMethods.getMinutes(); // دریافت دقیقه (0-59).
const seconds = dataMethods.getSeconds(); // دریافت ثانیه (0-59).

console.log(
  `\ntoDateString(): ${toDateString}, \nYear: ${fullYear}, \nMonth: ${month}, \nDay: ${day}, \nHours: ${hours}, \nMinutes: ${minutes}, \nSeconds: ${seconds}`,
);
// خروجی (ممکن است بسته به زمان اجرا متفاوت باشد):
// toDateString(): Fri Oct 27 2023,
// Year: 2023,
// Month: 9,
// Day: 5,
// Hours: 17,
// Minutes: 35,
// Seconds: 52

// ========================================================================
//                                توابع (Functions)
// ========================================================================
console.log("\n\n==================== متدهای توابع ====================");

//// تعریف یک تابع نمونه
function greet(greeting, punctuation) {
  return `${this.name}, ${greeting}${punctuation}`;
}

// 1. `call(thisArg, ...args)`: فراخوانی تابع با مقدار `this` و آرگومان‌های مشخص.
const person1 = { name: "Alice" };
const callResult = greet.call(person1, "Hello", "!"); // فراخوانی greet با this برابر person1 و آرگومان‌ها "Hello" و "!".
console.log("\ncall():", callResult); // خروجی: call(): Alice, Hello!
// ✅ `call`: تابع را فوراً اجرا می‌کند.
// ✅ پارامترها جداگانه پاس داده می‌شوند.
// ✅ `this` مشخص می‌شود.
// ⛔ تابع جدید نمی‌سازد.

// 2. `apply(thisArg, argsArray)`: فراخوانی تابع با مقدار `this` و آرگومان‌ها به صورت آرایه.
const person2 = { name: "Bob" };
const applyResult = greet.apply(person2, ["Hi", "."]); // فراخوانی greet با this برابر person2 و آرگومان‌ها به صورت آرایه ["Hi", "."].
console.log("apply():", applyResult); // خروجی: apply(): Bob, Hi.
// ✅ `apply`: تابع را فوراً اجرا می‌کند.
// ✅ پارامترها به صورت آرایه پاس داده می‌شوند.
// ✅ `this` مشخص می‌شود.
// ⛔ تابع جدید نمی‌سازد.

// 3. `bind(thisArg, ...args)`: ایجاد یک تابع جدید با مقدار `this` و آرگومان‌های ثابت (تابع اصلی اجرا نمی‌شود).
const person3 = { name: "Charlie" };
const boundGreet = greet.bind(person3, "Hey"); // ایجاد تابع جدید boundGreet با this برابر person3 و آرگومان ثابت "Hey".
console.log("bind():", boundGreet("?")); // خروجی: bind(): Charlie, Hey? (حالا تابع boundGreet فراخوانی می‌شود).
// ✅ `bind`: تابع را اجرا نمی‌کند.
// ✅ `this` و برخی پارامترها را ثابت می‌کند.
// ✅ تابع جدیدی با `this` ثابت‌شده می‌سازد.
// ✅ می‌توان بعداً صدا زد.

// ========================================================================
//                                Promise
// ========================================================================
console.log("\n\n==================== متدهای Promise ====================");

// این مثال رو من از chat gpt می خواستم که به نظرم خیلی ساده خوب کل این مبحث رو جمع بندی کرده
// 1. بررسی موجود بودن غذا (Promise)
function checkAvailability(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const availableFoods = ["pizza", "burger", "sushi"];
      if (availableFoods.includes(food)) {
        console.log(`✅ ${food} در دسترس است`);
        resolve(food); // Promise با موفقیت resolve می‌شود و غذا را برمی‌گرداند.
      } else {
        reject(`❌ ${food} موجود نیست`); // Promise با خطا reject می‌شود و پیام خطا را برمی‌گرداند.
      }
    }, 1000); // 1 ثانیه تاخیر
  });
}

// 2. گرفتن قیمت غذا (Promise)
function getPrice(food) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prices = {
        pizza: 200,
        burger: 150,
        sushi: 300,
      };
      console.log(`💰 قیمت ${food} = ${prices[food]} هزار تومان`);
      resolve(prices[food]); // Promise با موفقیت resolve می‌شود و قیمت غذا را برمی‌گرداند.
    }, 1000); // 1 ثانیه تاخیر
  });
}

// 3. پرداخت (Promise)
function pay(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userBalance = 250;
      if (userBalance >= amount) {
        console.log(`💳 پرداخت انجام شد`);
        resolve("پرداخت موفق"); // Promise با موفقیت resolve می‌شود و پیام موفقیت را برمی‌گرداند.
      } else {
        reject("❌ موجودی کافی نیست"); // Promise با خطا reject می‌شود و پیام خطا را برمی‌گرداند.
      }
    }, 1000); // 1 ثانیه تاخیر
  });
}

// 4. نهایی کردن سفارش (Promise)
function finalizeOrder(food) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📦 سفارش ${food} ثبت شد!`);
      resolve("سفارش نهایی شد"); // Promise با موفقیت resolve می‌شود و پیام نهایی شدن سفارش را برمی‌گرداند.
    }, 1000); // 1 ثانیه تاخیر
  });
}

// 🎯 اجرای همه مراحل با Promise (زنجیره Promise با then و catch و finally)
checkAvailability("burger")
  .then((food) => {
    // اگر checkAvailability موفق بود، این then اجرا می‌شود و getPrice را فراخوانی می‌کند.
    return getPrice(food);
  })
  .then((price) => {
    // اگر getPrice موفق بود، این then اجرا می‌شود و pay را فراخوانی می‌کند.
    return pay(price);
  })
  .then((paymentStatus) => {
    // اگر pay موفق بود، این then اجرا می‌شود و finalizeOrder را فراخوانی می‌کند.
    return finalizeOrder("burger");
  })
  .then((finalStatus) => {
    // اگر finalizeOrder موفق بود، این then اجرا می‌شود و پیام موفقیت نهایی را نمایش می‌دهد.
    console.log("🎉 همه مراحل با موفقیت انجام شد!");
  })
  .catch((err) => {
    // اگر در هر مرحله‌ای خطا رخ دهد، catch اجرا می‌شود و پیام خطا را نمایش می‌دهد.
    console.log("🚨 خطا:", err);
  })
  .finally(() => {
    // finally در هر صورت (چه موفقیت، چه خطا) اجرا می‌شود و پیام پایان عملیات را نمایش می‌دهد.
    console.log("🕓 عملیات سفارش تمام شد (چه موفق، چه ناموفق)");
  });

// async و await (ساده‌سازی کار با Promise)
async function orderFood(food) {
  try {
    // با await منتظر resolve شدن Promiseها می‌مانیم و کد به صورت خطی و خواناتر می‌شود.
    const availableFood = await checkAvailability(food);
    const price = await getPrice(availableFood);
    await pay(price);
    await finalizeOrder(availableFood);
    console.log("🎉 همه مراحل با موفقیت انجام شد!");
  } catch (error) {
    // اگر در هر مرحله‌ای خطا رخ دهد، catch اجرا می‌شود و پیام خطا را نمایش می‌دهد.
    console.log("🚨 خطا:", error);
  } finally {
    // finally در هر صورت (چه موفقیت، چه خطا) اجرا می‌شود و پیام پایان عملیات را نمایش می‌دهد.
    console.log("🕓 عملیات سفارش تمام شد (چه موفق، چه ناموفق)");
  }
}
orderFood("pizza"); // می‌توانید "burger" یا "sushi" را هم امتحان کنید

// ========================================================================
//                          Map و Set (ساختارهای داده پیشرفته)
// ========================================================================
console.log("\n\n==================== متدهای Map و Set ====================");

// ### 🔹 **8. متدهای `Map` و `Set`**

// 📌 **`Map` (کلید-مقدار پیشرفته)** - برای ذخیره جفت‌های کلید-مقدار، مشابه اشیاء اما با کلیدهای منعطف‌تر.

// 1. `set(key, value)` → اضافه کردن مقدار جدید به Map.
const mapExample = new Map();
mapExample.set("name", "Alice"); // کلید "name" با مقدار "Alice" اضافه می‌شود.
mapExample.set("age", 25); // کلید "age" با مقدار 25 اضافه می‌شود.
console.log("\nMap بعد از set:", mapExample); // خروجی: Map بعد از set: Map(2) { 'name' => 'Alice', 'age' => 25 }

// 2. `get(key)` → دریافت مقدار مربوط به کلید مشخص از Map.
const name = mapExample.get("name"); // دریافت مقدار کلید "name".
console.log("get('name'):", name); // خروجی: get('name'): Alice

// 3. `has(key)` → بررسی وجود یک کلید در Map (برگرداندن `true` یا `false`).
const hasAge = mapExample.has("age"); // بررسی وجود کلید "age".
console.log("has('age'):", hasAge); // خروجی: has('age'): true

// 📌 **`Set` (مجموعه‌ی مقادیر یکتا)** - برای ذخیره مجموعه‌ای از مقادیر یکتا، بدون تکرار.

// 1. `add(value)` → اضافه کردن مقدار جدید به Set.
const setExample = new Set();
setExample.add(1); // مقدار 1 به Set اضافه می‌شود.
setExample.add(2); // مقدار 2 به Set اضافه می‌شود.
setExample.add(2); // مقدار 2 دوباره اضافه می‌شود اما Set فقط مقادیر یکتا را نگه می‌دارد.
console.log("\nSet بعد از add:", setExample); // خروجی: Set بعد از add: Set(2) { 1, 2 }

// 2. `has(value)` → بررسی وجود مقدار در Set (برگرداندن `true` یا `false`).
const hasValue = setExample.has(1); // بررسی وجود مقدار 1 در Set.
console.log("has(1):", hasValue); // خروجی: has(1): true

// 3. `delete(value)` → حذف مقدار از Set.
setExample.delete(1); // حذف مقدار 1 از Set.
console.log("Set بعد از delete(1):", setExample); // خروجی: Set بعد از delete(1): Set(1) { 2 }

// ========================================================================
//                                JSON (تبادل داده)
// ========================================================================
console.log("\n\n==================== متدهای JSON ====================");

// ### 🔹 **9. متدهای `JSON`** - برای تبدیل داده‌های جاوااسکریپت به رشته JSON و بالعکس (برای تبادل داده با سرور و ذخیره‌سازی).

// 1. `JSON.parse(string)` → تبدیل **رشته JSON** به شیء جاوااسکریپت.
const jsonString = '{"name": "Alice", "age": 25}'; // یک رشته JSON.
const jsonObject = JSON.parse(jsonString); // تبدیل رشته JSON به شیء جاوااسکریپت.
console.log("\nJSON.parse():", jsonObject); // خروجی: JSON.parse(): { name: 'Alice', age: 25 }

// 2. `JSON.stringify(obj)` → تبدیل شیء جاوااسکریپت به **رشته JSON**.
const jsObject = { name: "Bob", age: 30 }; // یک شیء جاوااسکریپت.
const jsonStr = JSON.stringify(jsObject); // تبدیل شیء جاوااسکریپت به رشته JSON.
console.log("JSON.stringify():", jsonStr); // خروجی: JSON.stringify(): {"name":"Bob","age":30}
