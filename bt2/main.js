/** @format */

// bai 1 + 2
console.log("bai 1 + 2:");
let func1 = a => {
  if (isNaN(a)) return console.log(`${a} la ${typeof a} khong phai so`);
  if (!Number.isInteger(a)) return console.log(`${a} khong phai so nguyen`);
  return console.log(`${a} la so nguyen ${a < 0 ? "am" : "duong"} va ${a % 2 == 0 ? "chan" : "le"}`);
};
func1("b");
func1(1);
func1(0.1);

//bai 2: Viết hàm với tham số đầu vào là 1 số trong tháng (1 tới 12)...
console.log("\nbai 2: nam khong nhuan");
let func2 = a => {
  if (!Number.isInteger(a) || a > 12 || a < 1) return console.log("tham so phai nguyen và tu 1 den 12");
  let date = new Date("1 1 1971");
  let currentMonth = date.setMonth(a - 1);
  let b = (date.setMonth(a) - currentMonth) / 86400000;
  return console.log(`thang ${a} co ${b} ngay`);
};
["s", -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1.2].map(value => func2(value));
// co the truyen vao tham so thu 2 la nam bao nhieu de check nam nhuan hay khong nhuan
// cach 2: switch case => mat thoi gian

// bai 3:
console.log("\nbai 3:");
let func3 = (a, b, c) => {
  if (isNaN(a) || isNaN(b)) return console.log("ca 2 tham so phai la so");
  if (c === "+") return console.log(`${a} + ${b} = ${Number(a) + Number(b)}`);
  // ví dụ khi gọi func3('2', 2, '+') kế quả sẽ bằng 22 là sai 
  // vì phép cộng k cho thực hiện với các số dạng string nên ta phải chuyển đổi nó về dạng số
  if (c === "-") return console.log(`${a} - ${b} = ${a - b}`);
  if (c === "/") return console.log(`${a} / ${b} = ${a / b}`);
  if (c === "*") return console.log(`${a} * ${b} = ${a * b}`);
  return console.log(`${a} % ${b} = ${a % b}`);
};
func3(2, 2, "+");
