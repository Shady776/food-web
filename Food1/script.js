document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var menuList = document.querySelector('.menu-list');

    mobileMenuToggle.addEventListener('click', function () {
        menuList.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
// Select the link with the href attribute pointing to #food1
 var specialsLink = document.querySelector('a[href="#food1"]');

// Add a click event listener to the link
specialsLink.addEventListener('click', function (event) {
event.preventDefault(); // Prevent the default behavior of the link

 // Get the target element (the element with id="food1")
var targetElement = document.getElementById('food1');

 // Use smooth scrolling to scroll to the target element
 targetElement.scrollIntoView({
   behavior: 'smooth'
         });
    });
});


        



        document.addEventListener("DOMContentLoaded", function () {
            // Smooth scrolling to Specials
            var specialsLink = document.querySelector('a[href="#food1"]');
            specialsLink.addEventListener('click', function (event) {
                event.preventDefault();
                var targetElement = document.getElementById('food1');
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });

            // Scroll to top functionality
            var scrollToTopButton = document.getElementById('scrollToTopBtn');

            window.onscroll = function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    scrollToTopButton.style.display = "block";
                } else {
                    scrollToTopButton.style.display = "none";
                }
            };

            scrollToTopButton.addEventListener('click', function () {
                // Scroll to top with smooth animation
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
 







