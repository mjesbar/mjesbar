
import { Colour } from '/src/palette.js';



class MjNav extends HTMLElement {

  static observedAttributes = ['showing'];

  constructor() {
    super();
    this.setAttribute('showing', true);
    this.logoContainer = document.createElement('div');
    this.logoLeftText = document.createElement('span');
    this.logoCenterIcon = document.createElement('div');
    this.logoRightText = document.createElement('span');
    this.currentNav = document.createElement('button');
  }

  hideMjNavBar() {
    this.style.transform = 'translateY(-10vh)';
  }

  showMjNavBar() {
    this.style.transform = 'translateY(0vh)';
  }

  connectedCallback() {

    // Dynamic logo, omnipresent link to home
    // mj-nav
    // |-- currentNav (work)
    // |-- currentNav (service)
    // |-- logoContainer
    // | |-- logoLeftText
    // | |-- logoCenterIcon
    // | |  |-- logoCenterMisc1
    // | |  |-- logoCenterMisc2
    // | |  |-- ...
    // | |  '-- logoCenterMiscN
    // | '-- logoRightText
    // |-- currentNav (about)
    // '-- currentNav (contact)

    // Attributes ==============================================================

    // Children ================================================================


    this.logoLeftText.innerHTML = 'Mjesbar';
    this.logoRightText.innerHTML = 'Dev';
    this.currentNav.innerHTML = 'current';

    // Styles ==================================================================

    Object.assign(this.style, {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      position: 'fixed', zIndex: 10, top: 0, left: 0,
      width: '100%', height: '10vh',
      backgroundColor: Colour.black, color: Colour.white,
      overflow: 'visible',
      transition: 'transform 0.25s',
    });

    Object.assign(this.logoContainer.style, {
      position: 'relative', zIndex: 1,
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      width: '30vw', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      transition: 'transform 0.25s',
      cursor: 'pointer',
    });

    Object.assign(this.logoLeftText.style, {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '33.33%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      fontSize: '1.5em', fontWeight: 'bold',
      transition: 'transform 0.5s',
    });

    Object.assign(this.logoCenterIcon.style, {
      position: 'relative',
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: 'auto', height: '10%', aspectRatio: '1 / 1',
      margin: 0, padding: 0, border: 0,
      borderRadius: '50%',
      backgroundColor: Colour.persimmon,
      boxShadow: '0 0 12px 6px ' + Colour.persimmonLow,
      transition: 'transform 2s, height 0.25s',
    });

    Object.assign(this.logoRightText.style, {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '33.33%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      fontSize: '1.5em', fontWeight: 'bold',
      transition: 'transform 0.5s',
    });

    Object.assign(this.currentNav.style, {
      position: 'relative', zIndex: 2,
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '10%', height: '70%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, color: Colour.white,
      fontWeight: 'bold', fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.5s',
    });

    // Append ==================================================================


    const currentWork = this.currentNav.cloneNode(true);
    currentWork.innerHTML = 'Work';
    this.appendChild(currentWork);
    const currentService = this.currentNav.cloneNode(true);
    currentService.innerHTML = 'Service';
    this.appendChild(currentService);
    this.logoContainer.appendChild(this.logoLeftText);
    this.logoContainer.appendChild(this.logoCenterIcon);

    const numberOfRings = 5;
    for (let i = 0; i < numberOfRings; i++) {
      const logoCenterMisc = document.createElement('div');
      // Set style
      Object.assign(logoCenterMisc.style, {
        position: 'absolute', left: '50%', top: '50%', zIndex: -1,
        margin: 0, padding: 0, border: 0,
        transform: 'translate(-50%, -50%) rotate(0deg)',
        transition: 'transform 1s, opacity 0.25s',
      });
      this.logoCenterIcon.appendChild(logoCenterMisc);
    }

    this.logoContainer.appendChild(this.logoRightText);
    this.appendChild(this.logoContainer);
    const currentAbout = this.currentNav.cloneNode(true);
    currentAbout.innerHTML = 'About';
    this.appendChild(currentAbout);
    const currentContact = this.currentNav.cloneNode(true);
    currentContact.innerHTML = 'Contact';
    this.appendChild(currentContact);

    // Events ==================================================================

    this.logoContainer.onmouseenter = () => {
      // Animate logo
      this.logoContainer.style.transform = 'scale(1.6) translateY(25%)';
      this.logoCenterIcon.style.height = '30%';
      this.logoLeftText.style.transform = 'translateY(-40%)';
      this.logoRightText.style.transform = 'translateY(40%)';
      const rings = this.logoCenterIcon.querySelectorAll('div')
      for (let i = 0; i < rings.length; i++) {
        // Randomize traits
        const borderSize = 5 * (rings.length - i) - Math.floor(Math.random() * 2);
        const ringSize = 80 + 2 * (rings.length - i);
        const rotation = Math.floor(Math.random() * 180) - 180;
        const randomColour = [
          Colour.sage,
          Colour.sageLow,
          Colour.iceBlue,
          Colour.iceBlueLow,
          Colour.persimmonLow,
        ]
        // Set style
        Object.assign(rings[i].style, {
          position: 'absolute', left: '50%', top: '50%',
          width: 'auto', height: ringSize + '%', aspectRatio: '1 / 1',
          margin: 0, padding: 0,
          borderRadius: '100%',
          border: borderSize + 'px solid ' + Colour.transparent,
          borderRightColor: randomColour[i],
          borderLeftColor: randomColour[i],
          backgroundColor: Colour.transparent,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity: 1.0,
        });
      }
    }

    this.logoContainer.onmouseleave = () => {
      // Reset logo
      this.logoContainer.style.transform = 'scale(1) translateY(0)';
      this.logoCenterIcon.style.height = '10%';
      this.logoLeftText.style.transform = 'translateY(0%)';
      this.logoRightText.style.transform = 'translateY(0%)';
      this.logoCenterIcon.querySelectorAll('div').forEach((ring) => {
        ring.style.backgroundColor = Colour.transparent;
        ring.style.left = '50%';
        ring.style.top = '50%';
        ring.style.transform = 'translate(-50%,-50%) rotate(0deg)';
        ring.style.opacity = 0.0;
      });
    }

    this.logoContainer.onclick = () => {
      // Redirect to home
      window.location.href = 'https://mjesbar.dev';
    }

    this.querySelectorAll('button').forEach((button) => {

      if (button.innerHTML.toLowerCase() === window.location.pathname.split('/')[1]) {
        button.style.color = Colour.sageLow;
      }
      else {

      button.onclick = () => {
        // Redirect to respective section
        window.location.href = '/' + button.innerHTML.toLowerCase();
      }

      button.onmouseenter = () => {
        // Animate button
        button.style.color = Colour.persimmonLow;
      }

      button.onmouseleave = () => {
        // Reset button
        button.style.color = Colour.white;
      }
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'showing') {
      if (newValue === oldValue) return;
      (newValue === 'false' && oldValue === 'true') 
        ? this.hideMjNavBar()
        : null;
      (newValue === 'true' && oldValue === 'false')
        ? this.showMjNavBar()
        : null;
    }
  }
}


customElements.define('mj-nav', MjNav);
