/*--------------------------------------------------------------
FUNCTIONS
--------------------------------------------------------------*/

function scrollToElement(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top - 54
    }, 800, function() {
        window.location.hash = href;
    });
}


/*--------------------------------------------------------------
MOBILE SIDEBAR
--------------------------------------------------------------*/

function showMobileSidebar() {
    var mobileSidebar = document.getElementById('mobileSidebar');

    if (!mobileSidebar) return;

    mobileSidebar.style.display = 'block';
    document.body.classList.add('is-mobile-overlay-active');

    setTimeout(function() {
        mobileSidebar.classList.add('show');
    }, 100);
}

function hideMobileSidebar() {
    var mobileSidebar = document.getElementById('mobileSidebar');

    if (!mobileSidebar) return;

    mobileSidebar.classList.remove('show');

    setTimeout(function() {
        mobileSidebar.style.display = '';
        document.body.classList.remove('is-mobile-overlay-active');
    }, 300);
}

var mobileSidebarBtn = document.getElementById('mobileSidebarBtn');

if (mobileSidebarBtn) {
    mobileSidebarBtn.addEventListener('click', showMobileSidebar);
}

var closeMobileSidebarBtn = document.getElementById('closeMobileSidebarBtn');

if (closeMobileSidebarBtn) {
    closeMobileSidebarBtn.addEventListener('click', hideMobileSidebar);
}


/*--------------------------------------------------------------
NAVBAR
--------------------------------------------------------------*/

window.onscroll = function windowOnScroll() {
    var currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScrollTop < 20) {
        document.getElementById('header').classList.remove('minimized');
        document.getElementById('scrollToTopBtn').classList.remove('show');
    } else {
        document.getElementById('header').classList.add('minimized');
        document.getElementById('scrollToTopBtn').classList.add('show');
    }
};


/*--------------------------------------------------------------
JQUERY
--------------------------------------------------------------*/

$(document).ready(function() {

    /*--------------------------------------------------------------
    SCROLL TO ELEMENT
    --------------------------------------------------------------*/
    $('.scroll-to-href').on('click', function(event) {
        event.preventDefault();

        var href = event.currentTarget.getAttribute('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top - 54
        }, 800, function() {
            window.location.hash = href;
        });
    });

    /*--------------------------------------------------------------
    HOME
    --------------------------------------------------------------*/
    $('#homeClients').owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        items: 4,
        margin: 20,
        navText : [
            '',
            ''
        ],
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    /*--------------------------------------------------------------
    CAREERS
    --------------------------------------------------------------*/
    $('.apply-to-job-btn').on('click', function(event) {

    });
});