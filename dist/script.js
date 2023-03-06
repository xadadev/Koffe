// Hamburger menu functionality
const menuBtn = document.querySelector('.koffe__menu-btn');
const menuNav = document.querySelector('.koffe__nav');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuNav.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuNav.classList.remove('open');
    menuOpen = false;
  }
});

/* -------------- Ends -------------- */



const container = document.querySelector('.container');
const img = container.querySelector('img');
const isMobile = window.innerWidth < 768; // set breakpoint to remove animation on mobile

if (!isMobile) {
  container.addEventListener('mousemove', e => {
    // Calculate the position of the mouse relative to the center of the container element
    const xPos = (e.clientX - container.offsetWidth / 2) / 10;
    const yPos = (e.clientY - container.offsetHeight / 2) / 10;

    // Use GSAP to animate the position of the img element
    gsap.to(img, {
      x: xPos,
      y: yPos,
      ease: 'power2.out',
      duration: 1
    });
  });
} else {
  // remove the event listener on mobile devices
  container.removeEventListener('mousemove');
}




