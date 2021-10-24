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
          btns : [
              'student',
              'book',
              'switch'
          ]
        };
      },
      methods: {
        open($event) {
          let alt = $event.target.alt;
          let img = document.getElementById("full-img");
          img.src = `./img/full/${alt}.jpg`;
          let modal = document.getElementById("modal-1");
          setTimeout(() => {
            modal.classList.add("open")
          },200)
        },
        remove($event) {
          $event.target.classList.remove("open");
        },
        scroll(value) {
          document.getElementById(value).scrollIntoView({behavior: "smooth", inline: "nearest"});
        },
        switchStyle() {
            let randomColor = `${(Math.floor(Math.random()*256))},${(Math.floor(Math.random()*256))},${(Math.floor(Math.random()*256))}`
            let randomBg = `${(Math.floor(Math.random()*256))},${(Math.floor(Math.random()*256))},${(Math.floor(Math.random()*256))}`
            document.getElementById('switch').style.cssText = `
            color : rgb(${randomColor});
            background : rgb(${randomBg})
            `
        }
      },
})
app.mount('#app')