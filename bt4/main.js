/** @format */

const imgs = [
  {img: "pexels-anna-shvets-4588065.jpg", style: "land"},
  {img: "pexels-anthony-139639.jpg", style: "land"},
  {img: "pexels-burst-374825.jpg", style: "land"},
  {img: "pexels-carlos-spitzer-17811.jpg", style: "sky"},
  {img: "pexels-charles-1851164.jpg", style: "land"},
  {img: "pexels-frans-van-heerden-631292.jpg", style: "land"},
  {img: "pexels-gratisography-4602.jpg", style: "land"},
  {img: "pexels-jan-kopřiva-3614358.jpg", style: "sky"},
  {img: "pexels-jeremy-bishop-2422915.jpg", style: "ocean"},
  {img: "pexels-jim-long-949859.jpg", style: "land"},
];

let content_gallery = "";
let in_land = "";
let in_sky = "";
let in_ocean = "";

imgs.map((value, index) => {
  content_gallery += `<div class="img-container">
                        <img src="img/small/${value.img}" onclick="show_full_img(this)" alt="${++index}" />
                      </div>`;
  if (value.style === "land") {
    in_land += `<div class="img-container">
    <img src="img/small/${value.img}" onclick="show_full_img(this)" alt="${index}" />
  </div>`;
  }
  if (value.style === "sky") {
    in_sky += `<div class="img-container">
    <img src="img/small/${value.img}" onclick="show_full_img(this)" alt="${index}" />
  </div>`;
  }
  if (value.style === "ocean") {
    in_ocean += `<div class="img-container">
    <img src="img/small/${value.img}" onclick="show_full_img(this)" alt="${index}" />
  </div>`;
  }
});

document.getElementById("gallery").innerHTML = content_gallery;
document.getElementById("in_land").innerHTML = in_land;
document.getElementById("in_ocean").innerHTML = in_ocean;
document.getElementById("in_sky").innerHTML = in_sky;

const show_full_img = (a) => {
  document.getElementsByClassName("full-img")[0].src = `img/full/${a.alt}.jpg`;
  document.getElementsByClassName("modal1")[0].classList.add("open");
};
const hidden_full_img = (e) => {
  e.target.classList.remove("open");
};

const btn_scroll = [
  {content: "Tất cả", box: "all_img"},
  {content: "Sống trên cạn", box: "land"},
  {content: "Sống dưới nước", box: "ocean"},
  {content: "Bay trên trời", box: "sky"},
  {content: "Color", box: "color"},
];
let btn_scroll_node = "";
btn_scroll.map((value) => {
  btn_scroll_node += `<button class="btn btn-primary mx-2" onclick="scroll_to_div(${value.box})">${value.content}</button>`;
});
document.getElementById("btn_scroll").innerHTML = btn_scroll_node;

const scroll_to_div = (value) => {
  value.scrollIntoView({behavior: "smooth", inline: "nearest"});
};

document.getElementById("btn_color").onclick = () => {
  document.getElementById("text_color").style.cssText = `
  color : rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)});
  background : rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
};
