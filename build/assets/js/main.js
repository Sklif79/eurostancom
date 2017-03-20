function popUpInit(){var e=$(".popup-overlay"),i={overlay:e,orderForm:e.find(".order-form"),reviewForm:e.find(".review-form"),resumeForm:e.find(".resume-form"),callbackForm:e.find(".callback-form")},o=e.find(".popup__close"),n=(e.find("input[type=submit]"),function(){for(var e in i)"overlay"!=e&&i[e].fadeOut()});$(".popup-overlay").on("click",function(){$(this).fadeOut(300)});var t=function(){i.overlay.fadeOut()},a=function(){n(),t()},s=function(){i.overlay.fadeIn("slow")},l=function(){o.on("click",a)};return function(){return l(),{showOrderForm:function(){return s(),i.orderForm.fadeIn("slow"),i.orderForm},showReviewForm:function(){return s(),i.reviewForm.fadeIn("slow"),i.reviewForm},showResumeForm:function(){return s(),i.resumeForm.fadeIn("slow"),i.resumeForm},"showСallbackForm":function(){return s(),i.callbackForm.fadeIn("slow"),i.callbackForm}}}()}function mainSliderInit(){var e=$(".main-slider-wrap"),i=e.find(".slider").bxSlider({pager:!1});return e.find(".slider__controls-prev").click(function(){i.goToPrevSlide()}),e.find(".slider__controls-next").click(function(){i.goToNextSlide()}),i}function customInputFile(){var e=$(".custom-input-file");e.length&&e.each(function(){var e=$(this);e.find("input[type='file']").change(function(){var i=$(this).val().replace(/\\/g,"/").split("/").pop(),o=e.find(".custom-input-file__text");o.attr("value")?o.val(i):o.text(i)})})}function findParent(e,i){var o=e.parent();return o.hasClass(i)?o:findParent(o,i)}function closeSwipe(){$(".aside").removeClass("open-sidebar"),$(".content").show(),$(".mobile-header__icon").show(),$(".mobile-header__burger").show(),$(".btn-close-aside").hide(),$(".aside-nav__text").hide(),$(".aside-contacts__item.btn").hide(),$(".aside-contacts-text-divider").hide(),$(".aside-contacts__item span").hide(),$(".aside-contacts-text-divider").removeClass("mobile-inline-block"),$(".aside-contacts-phone").addClass("aside-contacts_mobile"),$(".aside-contacts-phone").addClass("aside-contacts-phone_mobile"),$(".aside-contacts-callback").addClass("aside-contacts_mobile"),$(".aside-nav__item").addClass("aside-nav_mobile")}function openSwipe(){$(".aside").addClass("open-sidebar"),$(".mobile-header__icon").hide(),$(".mobile-header__burger").hide(),$(".btn-close-aside").show(),$(".aside-nav__text").show(),$(".aside-contacts__item.btn").show(),$(".aside-contacts-text-divider").addClass("mobile-inline-block"),$(".aside-contacts__item span").show(),$(".aside-contacts-phone").removeClass("aside-contacts_mobile"),$(".aside-contacts-phone").removeClass("aside-contacts-phone_mobile"),$(".aside-contacts-callback").removeClass("aside-contacts_mobile"),$(".aside-nav__item").removeClass("aside-nav_mobile")}function addPhone(){$(".add_phone-to-field").each(function(){$(this).on("click",function(e){var i=findParent($(this),"field__wrap"),o=i.find(".field__for-cloning").clone(!0),n=i.find(".fields");o.appendTo(n).removeClass("field__for-cloning"),n.find(".field__label").addClass("field_indent-b"),phoneMask(),e.preventDefault()})})}function phoneMask(){$(".phone-mask").mask("+000000000000000",{placeholder:"+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"})}$(document).ready(function(){$(".about-slider").bxSlider({pagerCustom:"#about-slider-pager",slideMargin:15}),$(".slider-pager").bxSlider({infiniteLoop:!1,pager:!1,minSlides:1,maxSlides:10,moveSlides:1,slideMargin:5,slideWidth:80,nextSelector:"#pager-control_right",prevSelector:"#pager-control_left",nextText:"",prevText:""}),$(".certificates-slider").bxSlider({infiniteLoop:!0,minSlides:1,maxSlides:6,moveSlides:1,slideMargin:15,slideWidth:180}),$(".partners-slider").bxSlider({infiniteLoop:!0,pager:!1,minSlides:1,maxSlides:6,moveSlides:1,slideMargin:40,slideWidth:165}),$(".partners-slider-index").bxSlider({infiniteLoop:!0,pager:!1,minSlides:1,maxSlides:6,moveSlides:1,slideMargin:60,slideWidth:165}),$("#project-gallery").scrollGallery({mask:".holder",slider:".slideset",slides:"li",btnPrev:"a.btn-prev",btnNext:"a.btn-next",circularRotation:!1,autoRotation:!1,switchTime:3e3,animSpeed:500}),$("#project-news").scrollGallery({mask:".holder",slider:".slideset",slides:"li",btnPrev:"a.btn-prev",btnNext:"a.btn-next",circularRotation:!1,autoRotation:!1,switchTime:3e3,animSpeed:500}),$(".catalogs-slider").bxSlider({infiniteLoop:!0,minSlides:1,maxSlides:1,moveSlides:1,slideMargin:5,slideWidth:226,pager:!1}),$(".review-slider").bxSlider({infiniteLoop:!0,minSlides:1,maxSlides:4,moveSlides:1,slideWidth:300,pager:!1}),$(window).width()<=1300&&($(".aside").on("swiperight",function(){openSwipe()}),$(".aside").on("swipeleft",function(){closeSwipe()}),$(".btn-close-aside").on("click",function(){closeSwipe()})),function(){var e=$(".index-nav-category__nav");e.height()>0&&e.slideUp(0),$(".index-nav-category__title").on("click",function(){e.slideToggle(500),$(".index-nav-icon").toggleClass("open-nav")})}(),phoneMask(),addPhone(),customInputFile(),$(".mobile-header__burger").on("click",function(){$(".mobile-nav").toggleClass("active")}),$(".btn-close").on("click",function(){$(".mobile-nav").removeClass("active")}),$(".popup-overlay").height($(".wrapper-inner").height()+$(".footer").height()+40),$(".spoiler").on("click",function(){var e=$(this).prev();e.toggleClass("mobile-spoiler"),e.hasClass("mobile-spoiler")?$(this).text("Раскрыть"):$(this).text("Скрыть")});var e=popUpInit();$(".show-order-form").on("click",function(i){e.showOrderForm(),i.preventDefault()}),$(".show-review-form").on("click",function(i){e.showReviewForm(),i.preventDefault()}),$(".show-resume-form").on("click",function(i){e.showResumeForm(),i.preventDefault()}),$(".show-callback-form").on("click",function(i){e.showСallbackForm(),i.preventDefault()}),$(".hide-overlay-video").on("click",function(){$(".overlay-vedeo__info").slideToggle("slow")})});