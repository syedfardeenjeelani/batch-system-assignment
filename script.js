const breadcrumb = document.getElementById('breadcrumb')
const mobileMenu = document.getElementById('mobileMenu')

breadcrumb.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden')
})

const animateElements = document.querySelectorAll('.animate-element');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

animateElements.forEach((element) => {
  observer.observe(element);
});