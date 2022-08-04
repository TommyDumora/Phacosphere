const header = document.querySelector('header');
const hero = document.querySelector('.hero-section');

const options = {
    rootMargin: '-70px'
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
             header.classList.remove('changeColor')
        } else {
            header.classList.add('changeColor')
        }
    })
}, options)


observer.observe(hero)


// 


function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    // const div = document.querySelector('.picto-hero-section');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
        // div.classList.toggle('show-nav');
    })
}
toggleMenu();