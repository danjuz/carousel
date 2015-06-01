/* jshint devel:true */


var count = 0;

var carouselImg = ["https://photos-1.dropbox.com/t/2/AACytEesAP-JlQbeiUa6vdCOU1UETw3l13GcJ_WR-flOiw/12/8838851/png/32x32/1/_/1/2/Screenshot%202015-05-27%2013.56.20.png/CMO9mwQgASACKAEoAg/EJ0QWGjX6AEZNDs_NX0xFuQF6deeS-_bgEG4XhQNdNI?size=1024x768&size_mode=2",
"https://photos-4.dropbox.com/t/2/AADpG8kud1RJVMY6WCJaJkWJfBMOPjLvnUeOra_WheVCog/12/8838851/png/32x32/1/_/1/2/Screenshot%202015-05-27%2013.56.55.png/CMO9mwQgASACKAEoAg/fgP_TCBDiQmrzKapdQ4T0edLtxv83jvdePAUFbuN3MU?size=1024x768&size_mode=2",
"https://photos-4.dropbox.com/t/2/AACe0brx2MbSsVKg89syq2uZmZbZZz8paQYD3BtaqLZWPg/12/8838851/png/32x32/1/_/1/2/Screenshot%202015-05-27%2013.56.36.png/CMO9mwQgASACKAEoAg/2uPxF67esuMRfnwOVvnLVmih9PHoiX-ZXYFppxqR5eU?size=1024x768&size_mode=2"];

var carousel = {

  addPic: function(){
    $('.pic-container').append("<img src=" +  carouselImg[0] + " class='carousel-pic' />");
    carousel.autoNext();
  },

  nextPic: function(theNum){
    console.log(theNum);
    $('.pic-container').html("<img src=" +  carouselImg[theNum] + " class='carousel-pic' />");
  },

  autoNext: function(){

    window.setInterval(function(){
      count++;

    if(count > (carouselImg.length - 1)){
      count = 0;
      carousel.nextPic(count);
    } else{
      carousel.nextPic(count);
    }
    }, 6000);
  }
}

$( document ).ready(function() {
  carousel.addPic();
});


//Listeners
$('.arrow-right').on('click',function(){
  count++;

if(count > (carouselImg.length - 1)){
  count = 0;
  carousel.nextPic(count);
} else{
  carousel.nextPic(count);
}
});

$('.arrow-left').on('click',function(){
  count--;

  if(count <= -1){
    count = 2;
    carousel.nextPic(count);
  } else{
    carousel.nextPic(count);
  }
});
