// Burger Menu
const menuBtn = document.querySelector('.header__menu-btn')
const nav = document.querySelector('.header__nav')

const toggleMenu = () => {
    menuBtn.classList.toggle('active')
    nav.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)

// GSAP animations
gsap.registerPlugin(ScrollTrigger)

// Conditions for the animation in different screen sizes
if (window.innerWidth > 968) {
    let projectsSection = document.querySelector('.projects__grid')

    // start position
    gsap.set(projectsSection, {
        x: -250,
    })

    gsap.to(projectsSection, {
        x: -2330,
        ease: 'none',
        scrollTrigger: {
            trigger: '.projects',
            pin: true,
            scrub: 1,
            end: '+=1000px',
            invalidateOnRefresh: true,
        },
    })
}
