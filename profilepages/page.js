// set background image for each nav button
const navLi = document.querySelectorAll("nav .nav-container ul li");
navLi.forEach((li) => {
    const svgFile = li.getAttribute("data-svg"); // Get the SVG file from data attribute
    const link = li.querySelector("a");
    link.style.backgroundImage = `url('img/${svgFile}')`;
})


// as scrolling activate corresponding nav button
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 10) {
            current = section.getAttribute("id");
        }
    });
    current = current + "-button";
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("id") === current) {
            li.classList.add("active");
        }
    });
});




var navbar = $('nav');

var nav_button = $('nav .nav-container ul li')
var icon_container = $('.icon-container')

var icons = $('.icons');
var iconItems = $('.icon img');

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var icon_end = 100;
    var opacityVal = 1 - scrollTop / icon_end
    var translateVal = scrollTop * 2


    if (translateVal < 20) {
        translateVal = 0;
    }  else if (translateVal > 1000) {
        translateVal = 1000;
    }
    if (opacityVal < 0) {
        opacityVal = 0
    }

    iconItems.each(function(index) {
        // Calculate position to move left or right based on index
        var direction = index % 2 === 0 ? 1 : -1; // Alternate directions
        $(this).css({
            'opacity': opacityVal, // Fade icons
            'transform': `translateY(${direction * translateVal}px) scale(1)` // Move icons vertically
        });

    });

    nav_button.css("opacity", scrollTop / icon_end);
    if (scrollTop >= icon_end - 60) {
        navbar.css("visibility", "visible");
    } else {
        navbar.css("visibility", "hidden");
    }
})
