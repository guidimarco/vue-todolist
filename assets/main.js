var app = new Vue({
    el: "#root",
    data: {
        // autoplay: "null",
        toDoTitle: "Cose da fare:",
        // carouselIndex: 0,
        toDoList: [
            "Fare il bucato",
            "Comprare un panino",
            "Pulire camera",
            "Andare in palestra"
        ]
    },
    methods: {
        // nextImg: function() { // next-img function
        //     this.carouselIndex++;
        //     if (this.carouselIndex == this.carouselImg.length) {
        //         this.carouselIndex = 0;
        //     }
        // },
        // prevImg: function() { // prev-img function
        //     this.carouselIndex--;
        //     if (this.carouselIndex < 0) {
        //         this.carouselIndex = this.carouselImg.length - 1;
        //     }
        // },
        // toDotImg(dotIndex) { // dot-change-img
        //     this.carouselIndex = dotIndex;
        // },
        // stopAutoplay() {
        //     clearInterval(autoplay);
        // },
        // restartAutoplay() {
        //     autoplay = setInterval(this.nextImg, 1000);
        // },
        // test: function() {
        //     console.log("ciao");
        // }
    }
});
