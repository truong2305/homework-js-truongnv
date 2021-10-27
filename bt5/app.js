/** @format */

const app = Vue.createApp({
  data() {
    return {
      imgs: [
        "pexels-anna-shvets-4588065.jpg",
        "pexels-anthony-139639.jpg",
        "pexels-burst-374825.jpg",
        "pexels-carlos-spitzer-17811.jpg",
        "pexels-charles-1851164.jpg",
        "pexels-frans-van-heerden-631292.jpg",
        "pexels-gratisography-4602.jpg",
        "pexels-jan-kopřiva-3614358.jpg",
        "pexels-jeremy-bishop-2422915.jpg",
        "pexels-jim-long-949859.jpg",
      ],
      btns: ["student", "book", "switch"],
      isOpen: false,
      fullImg: "",
      colorStyle : '',
      bgStyle : ''
    };
  },
  methods: {
    open(img) {
      this.fullImg = `./img/small/${img}`;
      this.isOpen = true;
    },
    remove(e) {
      if(e.target.classList.contains('open')) this.isOpen = false
    },
    scroll(value) {
      document.getElementById(value).scrollIntoView({behavior: "smooth", inline: "nearest"});
    },
    switchStyle() {
      this.colorStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
      this.bgStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    },
  },
}).mount("#app");
