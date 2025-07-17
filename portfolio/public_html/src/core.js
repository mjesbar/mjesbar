
import { Colour } from '/src/palette.js';


// Generals ====================================================================

// add favicon
document.head.innerHTML += `
<link rel="icon" type="image/webp" href="/src/assets/meta-image.webp">
<link rel="mask-icon" href="/src/assets/meta-image.webp" color="#000000">
<link rel="apple-touch-icon" href="/src/assets/meta-image.webp">
`;

// link to google api fonts
document.head.innerHTML += `
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
  rel="stylesheet">
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
  rel="stylesheet">
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
  rel="stylesheet">
`;
document.body.style.fontFamily = 'Open Sans, Inter, Monserrat';
document.body.style.fontSize = '12px';


// Root ========================================================================

const html = document.querySelector('html');
Object.assign(html.style, {
  width: '100%',
  height: 'auto',
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: Colour.smokyBlack,
  color: Colour.white,
});

const body = document.querySelector('body');
Object.assign(body.style, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-start',
  margin: 0,
  padding: 0,
  border: 0,
  width: '100%',
  height: 'auto',
  backgroundColor: 'transparent',
});


// Events ======================================================================

window.onload = () => {
  console.log('Window loaded');
}

window.onmousemove = (event) => {
  // Make visible 'mj-nav' element when pointer is near
  const mjNav = document.querySelector('mj-nav');
  const navRect = mjNav.getBoundingClientRect();
  const tolerance = 50;
  const isNearNavBar = (
    event.clientY >= (navRect.top - tolerance)
    && event.clientY <= (navRect.bottom + tolerance)
  );
  if (isNearNavBar && !!mjNav.getAttribute('showing')) {
    mjNav.getAttribute('showing') === 'false'
      ? mjNav.setAttribute('showing', 'true')
      : null;
  }
};

window.onscroll = () => {
  // hide the 'mj-nav' element when user scroll down, and appear when scroll up.
  // no matter the current scroll position.
  const mjNav = document.querySelector('mj-nav');
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (scrollPos > mjNav.lastScrollPos) {
    mjNav.getAttribute('showing') === 'true'
      ? mjNav.setAttribute('showing', 'false')
      : null;
  }
  if (scrollPos < mjNav.lastScrollPos) {
    mjNav.getAttribute('showing') === 'false'
      ? mjNav.setAttribute('showing', 'true')
      : null;
  }
  mjNav.lastScrollPos = scrollPos;
}
