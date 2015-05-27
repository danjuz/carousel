/* jshint devel:true */

var carouselImg = ["https://photos-1.dropbox.com/t/2/AACz7hN-Y1SEiPUaOITgSUtbYPJQM9iGwFz9uV7fVIheVg/12/8838851/png/32x32/1/1432735200/0/2/Screenshot%202015-05-27%2013.56.20.png/CMO9mwQgASACKAEoAg/EJ0QWGjX6AEZNDs_NX0xFuQF6deeS-_bgEG4XhQNdNI?size=1024x768&size_mode=2",
"https://photos-3.dropbox.com/t/2/AADEbQvah5AaAS1VNqLAKIvbyC3cn032qfKg7p9MYQDR-g/12/8838851/png/32x32/1/1432735200/0/2/Screenshot%202015-05-27%2013.56.36.png/CMO9mwQgASACKAEoAg/2uPxF67esuMRfnwOVvnLVmih9PHoiX-ZXYFppxqR5eU?size=1024x768&size_mode=2",
"https://photos-2.dropbox.com/t/2/AADNDkla4E9xt3XstOxkTsV8FOZr7_1hI7YcYEA4oFrbog/12/8838851/png/32x32/1/1432735200/0/2/Screenshot%202015-05-27%2013.56.55.png/CMO9mwQgASACKAEoAg/fgP_TCBDiQmrzKapdQ4T0edLtxv83jvdePAUFbuN3MU?size=1024x768&size_mode=2"];

var carousel = {

  addPic: function(){
    $('.main-container').append("<img src=" +  carouselImg[0] + " class='carousel-pic' />");
    this.nextImg();
  },
  nextImg: function(){

  }
}



$( document ).ready(function() {
  carousel.addPic();
});
