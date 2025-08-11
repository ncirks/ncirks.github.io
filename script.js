$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
  

        }
    });
    // toggle menu/navbar script 
    //typing animation script
    var typed = new Typed(".typing", {
        strings:["Developer, Coder, Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });
});