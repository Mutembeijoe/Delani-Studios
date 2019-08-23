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

//    $('form').submit(function(e){
//        let name = $('input[name="client_name"]').val();
//        let email = $('input[name="client_email"]').val();
//        let message = $('textarea').val();
//        console.log(name,email,message);
//        //send email

//        //clear inputs
//        $('input[name="client_email"')[0].value = "";
//        $('input[name="client_name"')[0].value = "";
//        $('textarea')[0].value = "";
//     // success alert 
//        $('form').prepend(`<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Hi, ${name} we received your mail</div>`);
//         e.preventDefault();
//    })




/*  Mailchimp Subscribe  */
$('#subscribe-form').bind('submit', function(event) {
    event.preventDefault(); //prevent page refresh
    var name = $('[name="client_name"]').val();//get name field value
    var email = $('[name="client_email"]').val();//get email field value
    var message = $('[name="client_message"]').val();//get email field value
    var url =   "https://us3.api.mailchimp.com/2.0/lists/subscribe.json?"
               +  "apikey=ea85a83ce65e7bc74f4fe60dd025bfc9-us3&id=0e109de66a"//API KEY  
               +  "&email[email]=" + email //email address registering
               +  "&merge_vars[NAME]=" + name //name we're registering
               +  "&merge_vars[MESSAGE]=" + message
               +  "&double_optin=false" //add to list even if email is invalid
               +  "&send_welcome=false"; //send an email notification to new subscriber
   $.ajax({
         type: "POST",
         url: url,
         dataType: 'json',
         success: function(data) {
           $('#subscribe-form').html("Thank you!");
         },
         error: function(jqXHR, textStatus, errorThrown) {
           alert(errorThrown);
         }
     });//EO ajax
 });//EO click bind
    
})