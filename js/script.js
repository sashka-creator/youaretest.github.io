var lastScroll = 0,
    defaultOffset = 200,
    header = document.querySelector(".header"),
    scrollPosition = function() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },
    containHide = function() {
        return header.classList.contains("hide");
    };

window.addEventListener("scroll", function() {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add("hide");
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove("hide");
    }
    lastScroll = scrollPosition();
});

$(document).ready(function() {
    $("a.nav__item, a.intro__inner__btn, .a.catalog__link, .a.catalog__inner__item__container, .a.catalog__inner__item__link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});

$(document).ready(function() {
    $("#next").click(function(a) {
        $(".intro__inner__info__slider__item__left").css("left", "846px");
        $(".intro__inner__info__slider__item__prev").css("left", "160px");
        $(".intro__inner__info__slider__item__prev").css("width", "210px");
        $(".intro__inner__info__slider__item__active").css("left", "260px");
        $(".intro__inner__info__slider__item__active").css("width", "285px");
        $(".intro__inner__info__slider__item__next").css("right", "398px");
        $(".intro__inner__info__slider__item__next").css("z-index", "200");
        $(".intro__inner__info__slider__item__next").css("width", "420px");
        $(".intro__inner__info__slider__item__right").css("right", "260px");
        $(".intro__inner__info__slider__item__right").css("width", "285px");
    });
});

var state = {},
    carouselList = document.querySelector(".carousel__list"),
    carouselItems = document.querySelectorAll(".carousel__item"),
    elems = Array.from(carouselItems),
    currentIndex = 0,
    direction = 1;

var startCarousel = function() {
    var a = carouselItems.length;
    setInterval(function() {
        document.querySelector(".carousel__item_active");
        currentIndex = (currentIndex + direction) % a;
        if (currentIndex < 0) {
            currentIndex = a - 1;
        }
        update(carouselItems[currentIndex]);
    }, 2000);
};
startCarousel();

var update = function(a) {
    var b = a.dataset.pos;
    a = elems.find(function(d) {
        return d.dataset.pos == 0;
    });
    var c = elems.find(function(d) {
        return d.dataset.pos == -1;
    }),
    e = elems.find(function(d) {
        return d.dataset.pos == 1;
    }),
    f = elems.find(function(d) {
        return d.dataset.pos == -2;
    }),
    g = elems.find(function(d) {
        return d.dataset.pos == 2;
    });

    a.classList.remove("carousel__item_active");

    [a, c, e, f, g].forEach(function(d) {
        var h = d.dataset.pos;
        setTimeout(function() {
            d.dataset.pos = getPos(h, b);
        }, 500);
    });
};

var getPos = function(a, b) {
    return (Math.abs(a - b) > 2) ? -a : (a - b);
};

$(document).ready(function() {
    $(".burger__img, .burger__inner__item__close, .burger__inner__item").click(function(a) {
        $(".burger").toggleClass("visib");
    });
});

var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000
    },
    speed: 1000
});

swiper = new Swiper(".slider__catalog", {
    slidesPerView: 1,
    spaceBetween: 200,
    initialSlide: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(a, b) {
            return '<span class="' + b + ' catalog__filter">' + ["50 g", "120 g", "250 g"][a] + "</span>";
        }
    },
    speed: 1000
});

swiper.on("update", function() {
    var a = document.querySelectorAll(".swiper-pagination .catalog__filter");
    if (a) {
        for (var b = 0; b < a.length; b++) {
            a[b].style.marginLeft = "40px";
            a[b].style.padding = "8px 20px";
            a[b].style.background = "#181818";
            a[b].style.borderRadius = "10px";
            a[b].style.transition = ".3s";
            a[b].style.width = "80px";
            a[b].style.maxWidth = "80px";
        }
    }
});

$(".header__logo").on("click", function() {
    function a(b) {
        b.classList.add("flip");
        setTimeout(function() {
            b.classList.remove("flip");
        }, 350);
    }
    document.querySelectorAll(".catalog__inner__item").forEach(function(b, c) {
        setTimeout(function() {
            a(b);
        }, 350 * c);
    });
});

$(document).ready(function() {
    function a() {
        var b = $(window).width();
        if (b > 1300) {
            $("#open").click(function(c) {
                $(".catalog__back").fadeIn("slode");
                $("#open").css("display", "none");
                $("#close").css("display", "block");
                $(".swiper-3d").css("max-height", "1930px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1930px");
                $(".swiper-wrapper").css("max-height", "1930px");
            });
            $("#close").click(function(c) {
                $(".catalog__back").fadeOut("slode");
                $("#open").css("display", "block");
                $("#close").css("display", "none");
                $(".swiper-3d").css("max-height", "810px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "810px");
                $(".swiper-wrapper").css("max-height", "810px");
            });
        } else if (1300 > b && b > 1000) {
            $("#open").click(function(c) {
                $(".catalog__back").fadeIn("slode");
                $("#open").css("display", "none");
                $("#close").css("display", "block");
                $(".swiper-3d").css("max-height", "1530px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1530px");
                $(".swiper-wrapper").css("max-height", "1530px");
            });
            $("#close").click(function(c) {
                $(".catalog__back").fadeOut("slode");
                $("#open").css("display", "block");
                $("#close").css("display", "none");
                $(".swiper-3d").css("max-height", "750px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "750px");
                $(".swiper-wrapper").css("max-height", "750px");
            });
        } else if (1000 > b && b > 780) {
            $("#open").click(function(c) {
                $(".catalog__back").fadeIn("slode");
                $("#open").css("display", "none");
                $("#close").css("display", "block");
                $(".swiper-3d").css("max-height", "2180px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "2180px");
                $(".swiper-wrapper").css("max-height", "2180px");
                $(".slider__catalog").css("max-height", "2180px");
            });
            $("#close").click(function(c) {
                $(".catalog__back").fadeOut("slode");
                $("#open").css("display", "block");
                $("#close").css("display", "none");
                $(".swiper-3d").css("max-height", "1150px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1150px");
                $(".swiper-wrapper").css("max-height", "1150px");
            });
        } else if (780 > b && b > 400) {
            $("#open").click(function(c) {
                $(".catalog__back").fadeIn("slode");
                $("#open").css("display", "none");
                $("#close").css("display", "block");
                $(".swiper-3d").css("max-height", "1960px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1960px");
                $(".swiper-wrapper").css("max-height", "1960px");
                $(".slider__catalog").css("max-height", "1960px");
            });
            $("#close").click(function(c) {
                $(".catalog__back").fadeOut("slode");
                $("#open").css("display", "block");
                $("#close").css("display", "none");
                $(".swiper-3d").css("max-height", "1150px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1150px");
                $(".swiper-wrapper").css("max-height", "1150px");
                $(".slider__catalog").css("max-height", "1150px");
            });
        } else if (400 > b && b > 300) {
            $("#open").click(function(c) {
                $(".catalog__back").fadeIn("slode");
                $("#open").css("display", "none");
                $("#close").css("display", "block");
                $(".swiper-3d").css("max-height", "1710px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1710px");
                $(".swiper-wrapper").css("max-height", "1710px");
                $(".slider__catalog").css("max-height", "1710px");
            });
            $("#close").click(function(c) {
                $(".catalog__back").fadeOut("slode");
                $("#open").css("display", "block");
                $("#close").css("display", "none");
                $(".swiper-3d").css("max-height", "1150px");
                $(".swiper-3d.swiper-css-mode").css("max-height", "1150px");
                $(".swiper-wrapper").css("max-height", "1150px");
                $(".slider__catalog").css("max-height", "1150px");
            });
        }
    }
    a();
    $(window).resize(function() {
        a();
    });
});

$(document).ready(function() {
    $(".faq__img").click(function() {
        var item = $(this).closest(".faq__inner__item");
        var itemContent = item.find(".faq__inner__item__bottom");
        var itemImg = item.find(".faq__img");
        
        $(".faq__inner__item__bottom").not(itemContent).removeClass("show");
        $(".faq__img").not(itemImg).removeClass("rotated");
        
        itemContent.toggleClass("show");
        itemImg.toggleClass("rotated");
    });
});


// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });



// $(document).ready(function() {
//     var cardWrappers = $(".catalog__inner__item__wrapper");

//     cardWrappers.on("click mouseenter", function(event) {
//         var cardWrapper = $(this);
//         var card = cardWrapper.find(".catalog__inner__item");
//         var cardImgWrap = cardWrapper.find(".catalog__inner__item__img__wrap");

//         if (event.type === "click") {
//             cardWrapper.siblings().find(".catalog__inner__item").removeClass("flip");
//             cardWrapper.siblings().find(".catalog__inner__item__img__wrap").removeClass("flip");
//             card.toggleClass("flip");
//             cardImgWrap.toggleClass("flip");
//         } else if (event.type === "mouseenter") {
//             card.addClass("flip");
//             cardImgWrap.addClass("flip");
//         }
//     });

//     // Обработка клика на ".catalog__inner__item__back"
//     $(document).on("click", ".catalog__inner__item__back", function() {
//         var wrapper = $(this).closest(".catalog__inner__item__wrapper");
//         wrapper.find(".catalog__inner__item").removeClass("flip");
//         wrapper.find(".catalog__inner__item__img__wrap").removeClass("flip");
//     });

//     // Обработка ухода мыши
//     cardWrappers.on("mouseleave", function() {
//         var cardWrapper = $(this);
//         cardWrapper.find(".catalog__inner__item").removeClass("flip");
//         cardWrapper.find(".catalog__inner__item__img__wrap").removeClass("flip");
//     });
// });

window.onload = function() {
    setTimeout(function() {
        $('.preloader').addClass('hidden');
    }, 4000); // Например, задержка в 1 секунду
};




function addClassOnHoverAndClick(wrapperSelector, itemSelector) {
  // Функція для обробки наведення і кліка
  function handleHoverAndClick() {
    const $item = $(this).find(itemSelector);
    const $imgWrap = $(this).find('.catalog__inner__item__img__wrap');

    // Видаляємо клас 'flip' з усіх елементів, крім поточного
    $(wrapperSelector).find(itemSelector).not(this).removeClass('flip');
    $(wrapperSelector).find('.catalog__inner__item__img__wrap').not(this).removeClass('flip');

    // Перевіряємо наявність класу 'flip' на поточному елементі
    const hasFlipClass = $item.hasClass('flip');

    // Додаємо або видаляємо клас 'flip' на основі наявності
    $item.toggleClass('flip', !hasFlipClass);
    $imgWrap.toggleClass('flip', !hasFlipClass);
  }

  // Наведення і клік
  $(wrapperSelector).on('mouseenter', handleHoverAndClick);
  $(wrapperSelector).on('click', handleHoverAndClick);

  // Покидання зони активації
  $(wrapperSelector).mouseleave(function () {
    // Видаляємо клас 'flip' з усіх елементів при покиданні зони активації
    $(wrapperSelector).find(itemSelector).removeClass('flip');
    $(wrapperSelector).find('.catalog__inner__item__img__wrap').removeClass('flip');
  });
}

// Приклад використання:
addClassOnHoverAndClick('.catalog__inner__item__wrapper', '.catalog__inner__item');



// Modal

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.modal');
    var closeButton = document.querySelector('.modal__inner__text__btns__btn');
  
    closeButton.addEventListener('click', function() {
      modal.classList.add('animate__animated', 'animate__fadeOutUp');
      setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('animate__animated', 'animate__fadeOutUp');
        // Разблокировать прокрутку при закрытии модального окна
        enableScroll();
      }, 500);
    });
  
    // Заблокировать прокрутку при открытии модального окна
    function disableScroll() {
      document.body.style.overflow = 'hidden';
    }
  
    // Разблокировать прокрутку при закрытии модального окна
    function enableScroll() {
      document.body.style.overflow = 'auto';
    }
  
  
    // Блокировать прокрутку при открытии модального окна
    // disableScroll();
  });



  var swiper = new Swiper(".slider-about", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
        nextEl: ".about__inner__text__link",
        prevEl: ".about__inner__text__link__wrapper",
      },
});
