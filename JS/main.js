/* ================ Show Menu ================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* ================ Menu Show ================== */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu');
  });
}

/* ================ Hide Show ================== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
  });
}


/* ================ Remove Menu Mobile ================== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // when we click on each link, we remove the show menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/* ================ Active link ================== */
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

/*================== Background Header ================*/
function scrollHeader() {
  const header = document.getElementById('header');
  // when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*================== Mixitup Filter ================*/
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});

/* Active work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('activework');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*================== Testimonials Swiper ================*/
var testiSwiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  /*================== Contact Form ================*/
  const contactForm = document.getElementById('contact-form'),
       contactName = document.getElementById('contact-name'),
       contactEmail = document.getElementById('contact-email'),
       Message = document.getElementById('message'),
       contactMessage =document.getElementById('contact-message');
  
  const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
      // add and remove color
      contactMessage.classList.remove('color-light');
      contactMessage.classList.add('color-dark');

      // show message
      contactMessage.textContent = 'Write all the input fields';
    } else {
      // serviceID - templateID - #form - publickey
      emailjs.sendForm('service_l42m126','template_todosabio','#contact-form','k39JSCc1914GjZ27R')
      .then(() => {
        // show message and add color, window + dot to open emoji
        contactMessage.classList.add('color-light');
        contactMessage.textContent = 'Message sent ✔️';

        // remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000 );
      },
      (error) => {
        alert('OOPs! SOMETHING WENT WRONG...', error);
      }
      );

      // clear input fields
      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
    }
  };     
  
  contactForm.addEventListener('submit', sendEmail);

  /* ================ Style Switcher ================== */
  const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
        styleSwitcher = document.querySelector('.style__switcher');
  
  styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
  });

  // hide switcher on scroll
  window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
      styleSwitcher.classList.remove('open');
    }
  } );

  const alternateStyles = document.querySelectorAll('.alternate-style');

  function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  }
