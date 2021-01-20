$(document).ready(function() {
	
	// Global Variables
	var currentPage;
	var hash = window.location.hash.substr(1);
	
	
	// Animations for Menu
	var header = $('#mainHeader'),
		navTrigger = $('#mainHeader .nav-trigger');
	var tl_menu_init = new TimelineLite();

	if(window.matchMedia('(min-width: 768px)').matches) {
		tl_menu_init.from(header, 0.5, {right: '-170px', ease: Power3.easeOut}, '#onload');
		tl_menu_init.staggerFrom(navTrigger.find('span'), 0.5, {left: '-150px', delay: 0.3, ease: Power3.easeOut}, 0.1, '#onload');
		tl_menu_init.from(header.find('.black-1'), 0.7, {left: '-300px', delay: 0.5, ease: Power3.easeOut}, '#onload');
		tl_menu_init.from(header.find('.black-2'), 1, {left: '300px', delay: 0.1, ease: Power3.easeOut}, '#onload');
		tl_menu_init.from(header.find('.black-3'), 0.5, {left: '300px', delay: 0.3, ease: Power3.easeOut}, '#onload');
		tl_menu_init.from(header.find('.white-1'), 0.5, {left: '-300px', delay: 0.2, ease: Power3.easeOut}, '#onload');
		tl_menu_init.stop();
	}
	
	
	// Animations for homepage
	var logoTop = $('#logoTop'),
		logoShade = $('#logoShade'),
		description = $('.home-hero .description'),
		heroButton = $('.home-hero .btn');
	var tl_homepage = new TimelineLite({onComplete: animationComplete});
	
	tl_homepage.from(logoTop, 0.7, {left: '-1200px', ease: Power3.easeOut}, '#onload');
	tl_homepage.from(logoShade, 0.5, {top: '-10px', left: '-10px', autoAlpha: 0, delay: 0.5, ease: Power4.easeOut}, '#onload');
	tl_homepage.from(description.find('.title'), 0.5, {top: '-20px', autoAlpha: 0, delay: 0.7, ease: Power3.easeOut}, '#onload');
	tl_homepage.from(description.find('.bar span'), 0.5, {width: '0px', delay: 0.9, ease: Power3.easeOut}, '#onload');
	tl_homepage.from(description.find('.location'), 0.5, {top: '-20px', autoAlpha: 0, delay: 1, ease: Power3.easeOut}, '#onload');
	tl_homepage.from(heroButton, 0.5, {top: '+30px', autoAlpha: 0, delay: 1.3, ease: Power3.easeOut}, '#onload');
	tl_homepage.stop();
	
	
	// Animations for About page
	var myself = $('.about-content .left-content img'),
		imageShade = $('.about-content .left-content .bar'),
		contactCTA = $('.about-content .left-content .cta'),
		pageContent = $('.about-content .right-content > *');
	var tl_aboutpage = new TimelineLite({onComplete: animationComplete});
	
	tl_aboutpage.from(myself, 0.7, {left: '-1200px', ease: Power3.easeOut}, '#onload');
	tl_aboutpage.from(imageShade, 0.5, {top: '-10px', left: '-10px', autoAlpha: 0, delay: 0.4, ease: Power4.easeOut}, '#onload');
	tl_aboutpage.from(contactCTA, 0.5, {top: '+30px', autoAlpha: 0, delay: 0.8, ease: Power3.easeOut}, '#onload');
	tl_aboutpage.staggerFrom(pageContent, 0.5, {top: '+30px', autoAlpha: 0, ease: Power3.easeOut}, 0.05, '#onload');
	tl_aboutpage.stop();
	
	
	// Animations for Contact page
	var contactHeader = $('.contact-content .hero'),
		contactLead = $('.contact-content .lead'),
		contactForm = $('.contact-content form'),
		contactFormSend = $('.contact-content .js-send-form');
	var tl_contactpage = new TimelineLite({onComplete: contactComplete});
	
	tl_contactpage.from(contactHeader, 0.5, {top: '+30px', autoAlpha: 0, ease: Power3.easeOut}, '#onload');
	tl_contactpage.from(contactLead, 0.5, {top: '+30px', autoAlpha: 0, delay: 0.2, ease: Power3.easeOut}, '#onload');
	tl_contactpage.staggerFrom($('.contact-content form .field'), 0.5, {left: '+100px', autoAlpha: 0, delay: 0.4, ease: Power3.easeOut}, 0.1, '#onload');
	tl_contactpage.from(contactFormSend, 0.5, {top: '+30px', autoAlpha: 0, delay: 0.8, ease: Power3.easeOut}, '#onload');
	tl_contactpage.stop();
	
	function contactComplete() {
		$('#contactName').focus();
	}
	
	
	
	// Animations for navigation
	var menuItem = $('#mainNav ul li');
	var tl_menu_nav = new TimelineLite();
	
	if(window.matchMedia('(min-width: 768px)').matches) {
		tl_menu_nav.to(header, 0.5, {width: '250px', ease: Back.easeOut});
		tl_menu_nav.staggerFrom(menuItem, 0.3, {top: '100px', autoAlpha: 0, ease: Power3.easeInOut}, 0.1, '-0.05');
	} else {
		tl_menu_nav.to(header, 0.5, {height: '120px', ease: Back.easeOut});
		tl_menu_nav.staggerFrom(menuItem, 0.3, {left: '100px', autoAlpha: 0, ease: Power3.easeInOut}, 0.1, '-0.05');
	}
	tl_menu_nav.stop();
	
	
	// Function to execute on animation complete
	function animationComplete() {
		
	}

	// Hide loader when page is loaded
	$(window).load(function() {
		// Animate loader off screen
		$("#mainLoader").fadeOut("fast", function() {
			if(window.matchMedia('(min-width: 768px)').matches) {
				tl_menu_init.play();
			}
			
			switch (hash) {
				case "home":
					currentPage = "home";
					$("." + hash).removeClass('hidden');
					tl_homepage.play();
					break;

				case "about":
					currentPage = "about";
					$("." + hash).removeClass('hidden');
					tl_aboutpage.play();
					break;

				case "contact":
					currentPage = "contact";
					$("." + hash).removeClass('hidden');
					tl_contactpage.play();
					break;

				default:
					currentPage = "home";
					$(".home").removeClass('hidden');
					tl_homepage.play();
					break;
			}
			
			tl_homepage.play();
		});
	});
	
	
	// Update properties on window resize
	$(window).resize(function() {
		tl_homepage.remove();
		tl_aboutpage.remove();
		tl_contactpage.remove();
	});
	
	// Show/hide menu
	$('.nav-trigger').click(function(e) {
		e.preventDefault();
		
		if($(this).hasClass('active')) {
			tl_menu_nav.timeScale(1.3);
			tl_menu_nav.reverse();
			$(this).removeClass('active');
		} else {
			tl_menu_nav.timeScale(1);
			tl_menu_nav.play();
			$(this).addClass('active');
		}
		
	});
	
	
	// Navigate through site
	function goToSelectedPage(pageToGo) {
		if(pageToGo != currentPage) {
			var currentTimeline,
				timelineToGo;

			switch(currentPage) {
				case 'home':
					currentTimeline = tl_homepage;
					break;

				case 'about':
					currentTimeline = tl_aboutpage;
					break;
					
				case 'contact':
					currentTimeline = tl_contactpage;
					break;
			}

			switch(pageToGo) {
				case 'home':
					timelineToGo = tl_homepage;
					break;

				case 'about':
					timelineToGo = tl_aboutpage;
					break;
					
				case 'contact':
					timelineToGo = tl_contactpage;
					break;
			}

			currentTimeline.timeScale(2);
			currentTimeline.reverse();

			if(tl_menu_nav.progress() !== 0) {
				tl_menu_nav.reverse();
				$('.nav-trigger').removeClass('active');
			}

			setTimeout(function(){
				$('.' + currentPage).addClass('hidden');
				$('.' + pageToGo).removeClass('hidden');
				$("html, body").animate({ scrollTop: 0 }, 'fast');
				timelineToGo.play();
				currentTimeline.timeScale(1);
				currentPage = pageToGo;
				location.hash = pageToGo;
			}, (currentTimeline.duration()*1000)/2);
		}
	}
	
	
	$('.js-go-to-about').click(function(e) {
		e.preventDefault();
		goToSelectedPage('about');
	});
	
	$('.js-go-to-home').click(function(e) {
		e.preventDefault();
		goToSelectedPage('home');
	});
	
	$('.js-go-to-contact').click(function(e) {
		e.preventDefault();
		goToSelectedPage('contact');
	});
	
	$('.field-input').focus(function() {
		$(this).parent().addClass('is-focused has-label');
	});
	
	$('.field-input').blur(function() {
		$parent = $(this).parent();
		
		if($(this).val() === '') {
			$parent.removeClass('has-label');
		}
		$parent.removeClass('is-focused');
	});
	
	
	var formMessages = $("#formMessages");
	
	/*jQuery.validator.addMethod("equalsSix", function(value, element) {
		return value == 6;
	}, "Are you really that bad in Maths?");*/
	
	$('#contactForm').validate({
		debug: true,
		errorClass: "error",
		rules: {
			contactName: "required",
			contactEmail: {
				required: true,
				email: true
			},
			contactSubject: "required",
			contactBody: "required"
		},
		highlight: function (element, errorClass) {
			$(element).parent().addClass(errorClass);
		},
		unhighlight: function (element, errorClass) {
			$(element).parent().removeClass(errorClass);
		},
		invalidHandler: function (event, validator) {
			var errors = validator.numberOfInvalids();
			var invalidFields = validator.invalidElements();
			
			if (errors > 1) {
				invalidFields.each(function() {
					if($(this).val() === "") {
						formMessages.html('<p>Please fill all fields</p>').addClass("error").show();
					}
				});
			} else {
				invalidFields.each(function() {
					if($(this).val() === "") {
						formMessages.html('<p>Please fill all fields</p>').addClass("error").show();
					} else {
						if ($(this).attr("id") == "contactEmail") {
							formMessages.html('<p>Please enter a valid email address</p>').addClass("error").show();
						}/* else if ($(this).attr("id") == "mathQuestion") {
							formMessages.html('<p>Are you really that bad in Maths?</p>').addClass("error").show();
						}*/
					}
				});
			}
		},
		submitHandler: function (form) {
			var theForm = $('#contactForm');
			var formData = theForm.serialize();
			
			if (grecaptcha.getResponse()) {
				$(formMessages).hide();
				
				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: theForm.attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);
					$(formMessages).show();
					$("html, body").stop().animate({scrollTop: $(formMessages).offset().top - 100}, 300, 'swing');

					// Clear the form.
					theForm.trigger("reset");
					theForm.hide();
				})
				.fail(function(data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText).wrap('<p></p>');
						$(formMessages).show();
						$("html, body").stop().animate({scrollTop: $(formMessages).offset().top - 100}, 300, 'swing');
					} else {
						$(formMessages).text('Oops! An error occured and your message could not be sent.').wrap('<p></p>');
						$(formMessages).show();
						$("html, body").stop().animate({scrollTop: $(formMessages).offset().top - 100}, 300, 'swing');
					}
				});
			} else {
				grecaptcha.reset();
				grecaptcha.execute();
			}
		}
	});
	
});

function formSubmit(response) {
    // submit the form which now includes a g-recaptcha-response input
     $("#contactForm").submit();
    return true;
}




