// Burger Menu
const menuBtn = document.querySelector('.header__menu-btn')
const nav = document.querySelector('.header__nav')
const navLinks = document.querySelectorAll('.header__nav-link')

const toggleMenu = () => {
    menuBtn.classList.toggle('active')
    nav.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)

// Close menu on click outside
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu()
        }
    })
})

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

// Contact Form
const sendBtn = document.getElementById('send-btn')
const contactForm = document.querySelector('.contact__form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

sendBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (contactForm.checkValidity()) {
        sendBtn.textContent = '¡Mensaje enviado!'
        sendBtn.classList.add('sent')

        setTimeout(() => {
            sendBtn.textContent = 'Enviar mensaje'
            sendBtn.classList.remove('sent')
            contactForm.reset()
        }, 2000)
    } else {
        contactForm.reportValidity()
    }
})

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
})
