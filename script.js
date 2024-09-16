// JavaScript to hide/show navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('header'); // Select the navbar

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-80px"; // Hide the navbar
    } else {
        // Scrolling up
        navbar.style.top = "0"; // Show the navbar
    }
    lastScrollTop = scrollTop;
});

// Optional: Show navbar when hovering near the top of the page
navbar.addEventListener('mouseenter', function() {
    navbar.style.top = "0";
});

window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("header nav a");

    sections.forEach(section => {
        var top = window.scrollY;
        var offset = section.offsetTop - 150;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });
});
