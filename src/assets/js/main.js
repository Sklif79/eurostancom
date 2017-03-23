$(document).ready(function () {
    // $('a.btn-prev').click(function (e) {
    //     // custom handling here
    //     e.preventDefault();
    // });
    //
    // $('a.btn-next').click(function (e) {
    //     // custom handling here
    //     e.preventDefault();
    // });


    if (device.ios()) {
        $('.contact').css('display','block');

        $('.review-slider').bxSlider({
            infiniteLoop: true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            controls: true,
            // adaptiveHeight: true,
            pager: false
        });

        $('.partners-slider').bxSlider({
            infiniteLoop: true,
            pager: false,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1
        });

        $('.partners-slider').addClass('ios-partners-slider-wrap');

        $('.partners-slider-index').bxSlider({
            infiniteLoop: true,
            pager: false,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1
            // slideMargin: 60,
            // slideWidth: 165
        });

        $('.certificates-slider').bxSlider({
            infiniteLoop: true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 10,
            slideWidth: 180
            // controls: false
        });

        $('.about-slider').bxSlider({
            pagerCustom: '#about-slider-pager',
            slideMargin: 15
        });

        $('.slider-pager').bxSlider({
            infiniteLoop: false,
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            controls: false,
            slideMargin: 12,
            slideWidth: 60,
            // nextSelector: '#pager-control_right',
            // prevSelector: '#pager-control_left',
            // nextText: '',
            // prevText: ''
        });
    }

    if (!device.ios()) {
        $('.about-slider').bxSlider({
            pagerCustom: '#about-slider-pager',
            slideMargin: 15
        });

        $('.slider-pager').bxSlider({
            infiniteLoop: false,
            pager: false,
            minSlides: 1,
            maxSlides: 10,
            moveSlides: 1,
            slideMargin: 5,
            slideWidth: 80,
            nextSelector: '#pager-control_right',
            prevSelector: '#pager-control_left',
            nextText: '',
            prevText: ''
        });


        $('.certificates-slider').bxSlider({
            infiniteLoop: true,
            minSlides: 1,
            maxSlides: 6,
            moveSlides: 1,
            slideMargin: 15,
            slideWidth: 180
        });

        $('.partners-slider').bxSlider({
            infiniteLoop: true,
            pager: false,
            minSlides: 1,
            maxSlides: 6,
            moveSlides: 1,
            slideMargin: 40,
            slideWidth: 165
        });

        $('.partners-slider-index').bxSlider({
            infiniteLoop: true,
            pager: false,
            minSlides: 6,
            maxSlides: 6,
            moveSlides: 1,
            slideMargin: 60,
            slideWidth: 165
        });

        $('#project-gallery').scrollGallery({
            mask: '.holder',
            slider: '.slideset',
            slides: 'li',
            btnPrev: 'a.btn-prev',
            btnNext: 'a.btn-next',
            circularRotation: false,
            autoRotation: false,
            switchTime: 3000,
            animSpeed: 500
        });

        $('#project-news').scrollGallery({
            mask: '.holder',
            slider: '.slideset',
            slides: 'li',
            btnPrev: 'a.btn-prev',
            btnNext: 'a.btn-next',
            circularRotation: false,
            autoRotation: false,
            switchTime: 3000,
            animSpeed: 500
        });
        $('.catalogs-slider').bxSlider({
            infiniteLoop: true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 5,
            slideWidth: 226,
            pager: false
        });

        $('.review-slider').bxSlider({
            infiniteLoop: true,
            minSlides: 4,
            maxSlides: 4,
            // controls: false,
            moveSlides: 1,
            slideWidth: 300,
            pager: false,
            controls: true
        });



        if ($(window).width() <= 1370) {
            $('.about-slider').bxSlider({
                pagerCustom: '#about-slider-pager',
                slideMargin: 15,
                adaptiveHeight: true,
                controls: false
            });
            $('.certificates-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 1,
                maxSlides: 5,
                moveSlides: 1,
                slideMargin: 5,
                slideWidth: 180,
                controls: false
            });


            $('.partners-slider').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 1,
                maxSlides: 4,
                moveSlides: 1,
                slideMargin: 40,
                slideWidth: 165,
                controls: false
            });

        }

        if ($(window).width() <= 1300) {
            //cвайп
            $(".aside").on("swiperight", function () {
                openSwipe();
            });

            $(".aside").on("swipeleft", function () {
                closeSwipe();
            });

            $(".btn-close-aside").on("click", function () {
                closeSwipe();
            });
        }

        if ($(window).width() <= 1040) {
            $('.certificates-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 1,
                maxSlides: 4,
                moveSlides: 1,
                slideMargin: 40,
                slideWidth: 180,
                controls: false
            });

            $('.review-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 2,
                maxSlides: 2,
                controls: false,
                moveSlides: 1,
                slideWidth: 300,
                pager: false
            });

            $('.partners-slider-index').bxSlider({
                infiniteLoop: true,
                pager: false,
                minSlides: 5,
                maxSlides: 5,
                moveSlides: 1,
                slideMargin: 60,
                slideWidth: 165
            });
        }


        if ($(window).width() <= 780) {
            $('.certificates-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 1,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 30,
                slideWidth: 180,
                controls: false
            });

            $('.partners-slider-index').bxSlider({
                infiniteLoop: true,
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 60,
                slideWidth: 165
            });


            $('.review-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                controls: false,
                // adaptiveHeight: true,
                pager: false
            });


            $('.partners-slider').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 40,
                slideWidth: 155,
                controls: false

            });


            $('.about-slider').bxSlider({
                pagerCustom: '#about-slider-pager',
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 15,
                adaptiveHeight: true,
                controls: false
            });


            $('.slider-pager').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 3,
                maxSlides: 7,
                moveSlides: 1,
                controls: false,
                slideMargin: 5,
                slideWidth: 70,
                nextSelector: '#pager-control_right',
                prevSelector: '#pager-control_left',
                nextText: '',
                prevText: ''
            });
        }

        if ($(window).width() <= 600) {
            $('.certificates-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 1,
                slideMargin: 10,
                slideWidth: 180,
                controls: false
            });

            $('.partners-slider').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 1,
                slideMargin: 40,
                slideWidth: 155,
                controls: false

            });

            $('.about-slider').bxSlider({
                pagerCustom: '#about-slider-pager',
                slideMargin: 15,
                controls: false,
                minSlides: 1,
                maxSlides: 1
            });

            $('.slider-pager').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 4,
                maxSlides: 6,
                moveSlides: 1,
                controls: false,
                slideMargin: 12,
                slideWidth: 60,
                nextSelector: '#pager-control_right',
                prevSelector: '#pager-control_left',
                nextText: '',
                prevText: ''
            });
        }

        if ($(window).width() <= 340) {


            $('.certificates-slider').bxSlider({
                infiniteLoop: true,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                slideMargin: 40,
                slideWidth: 180,
                controls: false
            });
            $('.partners-slider-index').bxSlider({
                infiniteLoop: true,
                pager: false,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                slideMargin: 60,
                slideWidth: 165
            });

            $('.partners-slider').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                slideMargin: 40,
                slideWidth: 155,
                controls: false
            });

            $('.slider-pager').bxSlider({
                infiniteLoop: false,
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                controls: false,
                slideMargin: 5,
                slideWidth: 60,
                nextSelector: '#pager-control_right',
                prevSelector: '#pager-control_left',
                nextText: '',
                prevText: ''
            });

        }

    }



    if ($(window).width() <= 1300) {
        //cвайп
        $(".aside").on("swiperight", function () {
            openSwipe();
        });

        $(".aside").on("swipeleft", function () {
            closeSwipe();
        });

        $(".btn-close-aside").on("click", function () {
            closeSwipe();
        });
    }


    $(".read-more").on("click",function () {
        $('.common__text').toggleClass('hide_article');
    });




    function toggleTranscript () {
        var el = $(".index-nav-category__nav");
        if (el.height() > 0) {
            el.slideUp(0);
        }

        $(".index-nav-category__title").on("click",function () {
            el.slideToggle(500);
            $('.index-nav-icon').toggleClass('open-nav');
        });
    }

    toggleTranscript();


    phoneMask();

    addPhone();

    customInputFile();


//мобильное меню с сокрытием при клике вне области или по иконке х
    $(".mobile-header__burger").click(function() {
        $(".mobile-nav").toggleClass("active");
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mobile-header__burger").length) {
            $(".mobile-nav").removeClass("active");
        }
        e.stopPropagation();
    });

    $(".btn-close").on("click", function () {
        $(".mobile-nav").removeClass("active");
    });



    $('.popup-overlay').height(
        $('.wrapper-inner').height() + $('.footer').height()  + 40
    );

    //spoiler
    $('.spoiler').on("click", function () {
        var parent = $(this).prev();
        parent.toggleClass("mobile-spoiler");
        if (parent.hasClass("mobile-spoiler")) {
            $(this).text("Раскрыть");
        } else {
            $(this).text("Скрыть");
        }
    });
    $('.more-link').on("click", function () {
        var parent = $(this).prev();
        parent.toggleClass("vacancy-spoiler");
    });

    //spoiler
    // $('.more-link').on("click", function () {
    //
    //     $('.vacancy__section-block').toggleClass("vacancy-spoiler");
    // });


    //popup
    var popUp = popUpInit();

    $('.show-order-form').on('click', function (e) {
        popUp.showOrderForm();
        e.preventDefault();
    });
    $('.show-review-form').on('click', function (e) {
        popUp.showReviewForm();
        e.preventDefault();
    });
    $('.show-resume-form').on('click', function (e) {
        popUp.showResumeForm();
        e.preventDefault();
    });
    $('.show-callback-form').on('click', function (e) {
        popUp.showСallbackForm();
        e.preventDefault();
    });

    $(".hide-overlay-video").on("click", function () {
        $('.overlay-vedeo__info').slideToggle("slow");
    });
});

function popUpInit() {
    var el = $('.popup-overlay'),
        popUp = {
            overlay: el,
            orderForm: el.find('.order-form'),
            reviewForm: el.find('.review-form'),
            resumeForm: el.find('.resume-form'),
            callbackForm: el.find('.callback-form')
        },
        closeBtns = el.find('.popup__close'),
        submitBtns = el.find('input[type=submit]');

    var hidePopUps = function () {
        for (var key in popUp) {
            if (key != 'overlay') popUp[key].fadeOut();
        }
    };
    //скрытие оверлея при клике на фон
    $(".popup-overlay").on("click", function(){
        $(this).fadeOut(300);
    });

    var hideOverlay = function () {
        popUp.overlay.fadeOut();
    };

    var hideAll = function () {
        hidePopUps();
        hideOverlay();
    };

    var preparation = function () {
        popUp.overlay.fadeIn('slow');
    };

    var bindSettings = function () {
        closeBtns.on('click', hideAll);

        // submitBtns.on('click', function (e) {
        //     e.preventDefault();
        // });

    };

    return function () {
        bindSettings();

        return {
            showOrderForm: function () {
                preparation();
                popUp.orderForm.fadeIn('slow');
                return popUp.orderForm;
            },
            showReviewForm: function () {
                preparation();
                popUp.reviewForm.fadeIn('slow');
                return popUp.reviewForm;
            },
            showResumeForm: function () {
                preparation();
                popUp.resumeForm.fadeIn('slow');
                return popUp.resumeForm;
            },
            showСallbackForm: function () {
                preparation();
                popUp.callbackForm.fadeIn('slow');
                return popUp.callbackForm;
            }
        };
    }();
}


function mainSliderInit() {
    var sliderContainer = $(".main-slider-wrap"),
        slider = sliderContainer.find(".slider").bxSlider({
            pager: false
        });
    sliderContainer.find(".slider__controls-prev").click(function () {
        slider.goToPrevSlide();
    });
    sliderContainer.find(".slider__controls-next").click(function () {
        slider.goToNextSlide();
    });

    return slider;
}

function customInputFile() {
    var el = $(".custom-input-file");
    if (el.length) {
        el.each(function () {
            var that = $(this);
            that.find("input[type='file']").change(function () {
                var file = $(this).val().replace(/\\/g, "/").split("/").pop();
                var textField = that.find(".custom-input-file__text");
                if (textField.attr("value")) {
                    textField.val(file);
                } else {
                    textField.text(file);
                }
            });
        });
    }
}

function findParent(el, class_) {
    var parent = el.parent();
    if (parent.hasClass(class_)) {
        return parent;
    }
    else {
        return findParent(parent, class_);
    }
}

function closeSwipe() {
    $(".aside").removeClass("open-sidebar");
    $(".content").show();
    $(".mobile-header__icon").show();
    $(".mobile-header__burger").show();
    $(".btn-close-aside").hide();

    $(".aside-nav__text").hide();
    $(".aside-contacts__item.btn").hide();
    $(".aside-contacts-text-divider").hide();
    $(".aside-contacts__item span").hide();
    $(".aside-contacts-text-divider").removeClass("mobile-inline-block");

    $(".aside-contacts-phone").addClass("aside-contacts_mobile");
    $(".aside-contacts-phone").addClass("aside-contacts-phone_mobile");
    $(".aside-contacts-callback").addClass("aside-contacts_mobile");

    $(".aside-nav__item").addClass("aside-nav_mobile");
}

function openSwipe() {
    $(".aside").addClass("open-sidebar");
    $(".mobile-header__icon").hide();
    $(".mobile-header__burger").hide();
    $(".btn-close-aside").show();

    $(".aside-nav__text").show();
    $(".aside-contacts__item.btn").show();
    $(".aside-contacts-text-divider").addClass("mobile-inline-block");

    $(".aside-contacts__item span").show();

    $(".aside-contacts-phone").removeClass("aside-contacts_mobile");
    $(".aside-contacts-phone").removeClass("aside-contacts-phone_mobile");
    $(".aside-contacts-callback").removeClass("aside-contacts_mobile");

    $(".aside-nav__item").removeClass("aside-nav_mobile");
}

function addPhone() {
    var els = $('.add_phone-to-field');
    els.each(function () {
        var el = $(this);
        el.on('click', function (e) {
            var parent = findParent($(this), 'field__wrap'),
                newEl = parent.find('.field__for-cloning').clone(true),
                container = parent.find('.fields');
            newEl.appendTo(container).removeClass('field__for-cloning');
            container.find('.field__label').addClass('field_indent-b');
            phoneMask();
            e.preventDefault();
        })
    });
}

function phoneMask() {
    $(".phone-mask").mask("+000000000000000", {placeholder: "+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _"});
}
