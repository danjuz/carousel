var carousel = {
    count: 0,
    carouselImg: [
        "http://proproshloe.ru/zhitelyam/sites/default/files/imagecache/slideshow_picture/0695_0.jpg",
        "http://shopfinder.ccamstetten.at/backend/media/12.jpg",
        "http://cdn.xgn.nl/upload/201510/xbox-one-najaarsbundels-1443799313.jpg",
        "http://shopfinder.ccamstetten.at/backend/media/12.jpg"
    ],
    init: function(){
        this.addPic();
    },
    addPic: function(){
        $('.carousel-images').append("<img src=" +  this.carouselImg[0] + " class='carousel-pic' />");
        $('li:nth-child(1)').css({"color": "#df0000", "background": "#F2F2F2"});

        this.autoNext();
    },
    autoNext: function(){
        var self = this;

        nIntervId = window.setInterval(function(){
            self.count++;

            if(self.count > (self.carouselImg.length - 1)){
                self.count = 0;
                $("li:nth-child("+ self.carouselImg.length +")").css({"color": "black"});
                self.nextPic(self.count);
            } else{
                self.nextPic(self.count);
            }
        }, 2000);

        $('ul li').click(function(){
            self.stopInterval(nIntervId);
            self.nextPic($(this).index());
        });
        $(".carousel-images").hover(function(){
            clearInterval(nIntervId);
        });
        $(".carousel-images").mouseout(function(){
            self.autoNext();
        });
    },
    showAndStop: function(index){
        $('.carousel-images').html("<img src=" +  this.carouselImg[index] + " class='carousel-pic' />");
        this.stopInterval();
    },
    nextPic: function(theNum){
        titel = theNum + 1;
        theNumBefore = titel - 1;
        $('.carousel-images').html("<img src=" +  this.carouselImg[theNum] + " class='carousel-pic' />");

        $("li").css({"color": "black", "background": "#ffffff"});
        $("li:nth-child("+ titel +")").css({"color": "#df0000", "background": "#F2F2F2"});
    },
    stopInterval: function(nIntervId){
        clearInterval(nIntervId);
    }
}

$( document ).ready(function() {
    carousel.init();
});
