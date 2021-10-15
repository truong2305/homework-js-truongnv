/** @format */

const bt12 = document.getElementById("bt12");
const add_product = document.getElementById("add_product");
const price = document.getElementById("price");
const in_name = document.getElementById("in_name");
const in_price = document.getElementById("in_price");
const actions = document.getElementById("actions");
actions.style.display = "none";

const products = [
  {name: "máy giặt", price: 100},
  {name: "iphone 13", price: 99},
  {name: "tivi", price: 10},
];

let tbody = "";
let total_price = 0;
products.map((value, key) => {
  total_price += value.price; // thực hiện yêu cầu bài 1, ở mảng các số thì dùng reduce tính tổng, ở đây em làm khác đề một chút nên k dùng reduce
  tbody += `<tr>
    <td>${key + 1}</td>
    <td>${value.name}</td>
    <td>${value.price}.000 đ</td>
  </tr>`;
});
bt12.innerHTML = tbody; // mấy đoạn code thực hiện yêu cầu 2.1, khác yêu cầu đề bài một chút
price.innerHTML = `${total_price}.000 đ`;

show_actions = () => {
  add_product.style.display = "none";
  actions.style.display = "block";
};

hidden_actions = () => {
  add_product.style.display = "block";
  actions.style.display = "none";
};

add_item_product = () => {
  hidden_actions();
  const tr = document.createElement("tr");
  products.push({name : in_name.value, price : in_price.value})
  stt_product = products.length;
  tr.innerHTML = `<tr>
<td>${stt_product}</td>  
<td>${in_name.value}</td>
<td>${in_price.value}.000 đ</td>
</tr>`;
  // để tiết kiệm thời gian thì em không validate input, nên nếu nhập k đúng thì sẽ dẫn tới giá trị sai
  bt12.appendChild(tr); // mấy đoạn code thực hiện yêu cầu 2.2, khác yêu cầu đề bài một chút
  price.innerHTML = `${(total_price += Number(in_price.value))}.000 đ`;
  in_name.value = ''
  in_price.value = ''
};


let check = false;
const btn_show_detail = document.getElementById('btn_show_detail')
const bt3 = () => {
  // câu 3.1
  check = !check;
  if (check) {
    btn_show_detail.innerHTML = 'hidden product'
    const show_product_detail = document.getElementById("show_product_detail");
    const index = Math.floor(Math.random() * products.length);
    const bg_table = ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning"];
    show_product_detail.innerHTML = `<table class="table ${
      bg_table[Math.floor(Math.random() * bg_table.length)]
    }">
      <thead>
        <tr>
          <th scope="col">Stt</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td>${index + 1}</td>
      <td>${products[index].name}</td>
      <td>${products[index].price}.000 đ</td>
    </tr></tbody>
    </table>`;
    show_product_detail.style.display = "block"
  }
  else {
    btn_show_detail.innerHTML = 'show random product'
    show_product_detail.style.display = "none"
  };
};

//câu 3.2
const container1 = document.getElementById('container1')
const container2 = document.getElementById('container2')
container1.style.display = 'none'
const server_pause = () => {
  container2.style.display = 'none'
  container1.style.display = 'block'
}
const server_play= () => {
  container1.style.display = 'none'
  container2.style.display = 'block'
}

