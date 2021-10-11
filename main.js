/** @format */

// bai1

let first_name, last_name;
const x = 1,
  y = 2,
  z = 3;
// let 1, *age, %name, #class, ^ ( bien khong cho phep )

//bai2
console.log("bai 2 :\nket qua " + x + " + " + y + " = " + Number(x + y));
console.log("ket qua " + z + " - " + x + " = " + Number(z - x));
console.log("ket qua " + y + " * " + z + " = " + Number(y * z));
console.log("ket qua " + x + " / " + y + " = " + Number(x / y));
console.log("ket qua " + y + " % " + z + " = " + Number(y % z));

// bai3
{
  let x = 5;
  const result = ++x + x++ - --x - x--;
  //    result =   6 + 6   -   6 - 6 = 0
  //    x = 5
  console.log("\nbai 3 :\n3.1: ket qua = " + result);
}
{
  let x = 6,
    y = 10;
  const result = ++y - y++ + x++ + x-- - --x - --y;
  //    result = 11  - 11  + 6   + 7   -   5 -  11 = -3
  //    x = 5, y = 11
  console.log("3.2: ket qua = " + result);
}
{
  let x = 10,
    y = 12,
    z = 16;
  const result1 = x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--;
  //    result1 = 10  + 16  -  10 +  11 - 11  + 11  +  16 +  15 + 10 = 68
  //    x = 9, y = 11, z = 15
  //    console.log(x,y,z);
  const result2 = ++x - x++ + z++ + ++y - y--;
  //    result2 =  10 - 10  + 15  +  12 - 12 = 15
  //    x = 11, y = 11, z = 16
  //    console.log(x,y,z);
  console.log("3.3: ket qua lan 1 = " + result1);
  console.log("     ket qua lan 2 = " + result2);
}

// bai 4
{
  let x = true; //Boolean
  let y = 3; //Number
  let z = "truong"; //String
  const a = []; //Object
  let b; //Undefined
  console.log("\nbai 4:");
  [x, y, z, a, b].map((value) => console.log(typeof value));
}

//bai 5
console.log("\nbai 5:");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrLength = arr.length - 1;
const resultAdd = arr[0] + arr[1];
const resultMul = arr[0] * arr[arrLength];
console.log("5.1: tong arr[0] + arr[1] = " + resultAdd);
console.log("5.2: tich arr[0] + arr[" + arrLength + "] = " + resultMul);

//bai 6
const personArr = [];
const person = {
  firstName: "",
  lastName: "",
  age: "",
  favorite: "",
};
const table = document.getElementsByTagName("table")[0]
const input = document.getElementsByTagName("input")
if (personArr.length < 1) table.style.display = "none";
addItem = (e) => {
e.preventDefault();
if( input[0].value.trim() === '' && input[1].value.trim() === '' && input[2].value.trim() === '' && input[3].value.trim() === '')
return document.getElementById('error').innerHTML = 'chưa có trường nào được nhập'
  document.getElementById('error').innerHTML = null
  person.firstName = input[0].value;
  person.lastName = input[1].value;
  person.age = input[2].value;
  person.favorite = input[3].value;
  personArr.push(person);
  table.style.display = "table";
  let tbody = "";
  personArr.map( value => {
    return (tbody =
      "<tr><td>" +
      value.firstName +
      "</td><td>" +
      value.lastName +
      "</td><td>" +
      value.age +
      "</td><td>" +
      value.favorite +
      "</td></tr>");
  });
  document.getElementById("tbody").innerHTML = tbody;
};
