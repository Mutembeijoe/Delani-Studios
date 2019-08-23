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
               +  "apikey=d8ebe42f1475d69123eee37ca1cb78ba-us3&id=0e109de66a"//API KEY  
               +  "&email[email]=" + email 
               +  "&merge_vars[NAME]=" + name 
               +  "&merge_vars[MESSAGE]=" + message
               +  "&double_optin=false" //add to list even if email is invalid
               +  "&send_welcome=false"; //prevent send an email notification to new subscriber
   $.ajax({
        //  type: "POST",
        url: url,
        crossDomain:true,
        dataType: 'jsonp',
        success: function(data) {
        //    $('#subscribe-form').html("Thank you!");
        $('form').prepend(`<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Hi, ${name} we received your mail</div>`);
        },
        error: function(jqXHR, textStatus, errorThrown) {
        //    alert(errorThrown);
        $('form').prepend(`<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Hi, ${name} we received your mail</div>`);

        }
    });

    $('input[name="client_email"')[0].value = "";
    $('input[name="client_name"')[0].value = "";
    $('textarea')[0].value = "";

 });
    
})