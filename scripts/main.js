$(document).ready(function(){

    //What We Do Section Animation
    $('.service-icon').on('click',function(){
        $(this).fadeOut(function(){
           $(this).next().fadeIn();
        })
    })

    $('.service-icon').hover(function(){
        $(this).addClass('shadow p-3 mb-5 bg-white rounded')
    },function(){
        $(this).removeClass('shadow p-3 mb-5 bg-white rounded')
    })

    $('.description').on('click',function(){
        $(this).fadeOut(function(){
           $(this).prev().fadeIn();
        })
    })

    //Portfolio Section Animation
    $('.show-case').hover(function () { 
        $(this).children('.cover').toggleClass('cover-hover').stop().animate({height:'225px'});
        $(this).children('.show-case-img').stop().fadeTo("slow",0.4).addClass('scale')
        $(this).children('.portfolio-desc').stop().animate({opacity:1},300)

    },function(){
        $(this).children('.cover').toggleClass('cover-hover').stop().animate({height:'205px'})
        $(this).children('.show-case-img').stop().fadeTo(50,1).removeClass('scale')
        $(this).children('.portfolio-desc').stop().animate({opacity:0},100)
    });

    //  smooth scroll behaviour in jquery
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

    /*  Mailchimp Subscribe API */
    $('#subscribe-form').bind('submit', function(event) {
        event.preventDefault(); 
        var name = $('[name="client_name"]').val();
        var email = $('[name="client_email"]').val();
        var message = $('[name="client_message"]').val();
        var url =   "https://us3.api.mailchimp.com/2.0/lists/subscribe.json?"
                +  "apikey=d8ebe42f1475d69123eee37ca1cb78ba-us3&id=0e109de66a"//API KEY - May Fail on Gh-pages after some time. For security reasons MailChimp deactivates keys revealed in public! 
                +  "&email[email]=" + email 
                +  "&merge_vars[NAME]=" + name 
                +  "&merge_vars[MESSAGE]=" + message
                +  "&double_optin=false" 
                +  "&send_welcome=false"; //prevent send an email notification to new subscriber
    $.ajax({
            //  type: "POST",
            url: url,
            crossDomain:true,
            dataType: 'jsonp',
            success: function(data) {
                $('form').prepend(`<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Hi, ${name} we received your mail</div>`);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Both success and error handled the same way due to CORS - The Api call succeeds but still resolves to failure.  
                $('form').prepend(`<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Hi, ${name} we received your mail</div>`);
            }
        });

        $('input[name="client_email"')[0].value = "";
        $('input[name="client_name"')[0].value = "";
        $('textarea')[0].value = "";

    });
    
    // Additional alias slider
    $('#personal-brand').hover(function(){
        $(this).stop().animate({left:'-20px'})
    },function(){
        $(this).stop().animate({left:'-180px'})
    })
        
})