// jquery imported in webpack.config.js
var portfolio = {
	menu: function(){
		// assign click event to menu items
		$("li, .anchored").click(function (){
			var anchor = $( this ).attr('anchor-to');
			$('html, body').animate({
				scrollTop: $("#"+anchor).offset().top
			}, 1000);
		});
	},
	scrolling: function(){
		var distance = $('#about-me').offset().top,
			  $window = $(window),
        menu = 0;
		//detect window scroll
		$(window).scroll(function(event){
			if ( $window.scrollTop() >= distance ) {
				if ( menu == 0 ){
					menu = 1;
					$('#nav').removeClass('navigation text-align-right').addClass('navigation-down text-align-center');
					// fade in
					setTimeout(function(){
						$('#nav').addClass('navigation-down-transition');
					}, 50);
                                }
			} else {
				if( menu == 1){
					menu = 0;
					$('#nav').removeClass('navigation-down text-align-center navigation-down-transition').addClass('navigation text-align-right');
				}
			}
			// fade in sections on scroll
	    $('.fadeInBlock').each( function(){
        var top_of_object = $(this).position().top + 150;
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
				// Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it
        bottom_of_window = bottom_of_window;
        if( bottom_of_window > top_of_object ){
          if( $(this).css("opacity") != '1'){
            $(this).animate({'opacity':'1'},1500);
          }
          $('li[anchor-to]').css("color","#878787");
          $('li[anchor-to]').css("font-weight","normal");
          $('li[anchor-to="'+$(this).attr("menu-id")+'"]').css("color","black");
          $('li[anchor-to="'+$(this).attr("menu-id")+'"]').css("font-weight","bold");
        }
        if( $(window).scrollTop() < 40 ){
          $('li[anchor-to]').css("color","white");
          $('li[anchor-to]').css("font-weight","normal");
        }
      });
		});
	},

  quickscroll: function() {
    $(window).scrollTop($(window).scrollTop()+1);
    $(window).scrollTop($(window).scrollTop()-1);
  },

	adjust: function() {
		if( $(window).height() > 800) {
			$('#about-me .container').animate({'opacity':'1'},1500);
		}
	}
}

var sendMSG = function(){
  err = function(arg1){
  	$('#alertmsg').removeClass('hidden');
  	$('#alertmsgContent').html('Fields highlighted in red are required to send me a message!');
  	$('#'+arg1).css("border","solid red 1px")
  	success = false
	}
	var name = $('#name').val(),
	    email = $('#email').val(),
	    phone = $('#phone').val(),
	    message = $('textarea#message').val(),
	    success = true
	if(name == ''){
		this.err('name');
	} else {
		$('#name').css("border","1px solid #D1D1D1");
	}

	if(email == ''){
		this.err('email');
	} else {
		$('#email').css("border","1px solid #D1D1D1");
	}

	if(message == ''){
		this.err('message');
	} else {
		$('#message').css("border","1px solid #D1D1D1");
	}
	if(success == true){
		//alert('Sorry, i will hook up the server side to this SOON')
		$.getJSON("/assets/contact.cfc",{
			method: "sendMessage",
			name: name,
			phone: phone,
			email: email,
			message: message
		},function(){
			$('#contactBox').html('Your message has been sent to my inbox! I\'ll get back to you shortly.');
		});
	}
}

//initiate
$(document).ready(function (){
	portfolio.menu();
	portfolio.scrolling();
	portfolio.adjust();
  portfolio.quickscroll();
	$('#contactMeButt').on("click",function(){
		sendMSG();
	})
});
