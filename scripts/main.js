$(document).ready(function(){
    $('.service-icon').on('click',function(){
        $(this).fadeOut(function(){
           $(this).next().fadeIn();
        })
    })
    $('.description').on('click',function(){
        $(this).fadeOut(function(){
           $(this).prev().fadeIn();
        })
    })
    //smooth scroll behaviour in jquery
   $('a[href="#about"]').click(function(e){
       if(this.hash != ""){
           e.preventDefault();

           let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },800,function(){
                window.location.hash = hash;
            })

       }
   })
    
})