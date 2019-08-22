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

    $('.show-case').hover(function () { 
        $(this).children('.cover').toggleClass('cover-hover');
        $(this).children('.show-case-img').stop().fadeTo("slow",0.4)
        $(this).children('.portfolio-desc').css({opacity:1})

    },function(){
        $(this).children('.cover').toggleClass('cover-hover')
        $(this).children('.show-case-img').stop().fadeTo("fast",1)
        $(this).children('.portfolio-desc').css({opacity:0})
    });
//     smooth scroll behaviour in jquery
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

   $('form').submit(function(e){
       let name = $('input[name="name"]').val();
       let email = $('input[name="email"]').val();
       let message = $('textarea').val();
       console.log(name,email,message);
       //send email

       //clear inputs
       $('input[name="email"')[0].value = "";
       $('input[name="name"')[0].value = "";
       $('textarea')[0].value = "";
    // success alert 
       $('form').prepend(`<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Hi, ${name} we received your mail</div>`);
        e.preventDefault();
   })
    
})