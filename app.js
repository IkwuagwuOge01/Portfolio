window.addEventListener('scroll', function() {
 var scrollPosition = window.pageYOffset;
 var header = document.querySelector('header');

 if (scrollPosition > 50) {
    header.classList.add('scrolled');
 } else {
    header.classList.remove('scrolled');
 }
});