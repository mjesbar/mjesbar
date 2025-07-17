
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



class MjSectionTextalone extends MjSection {

  /* Structure
   *
   * mj-section-textalone
   * |-- mainTextEl
   * |-- subTextEl
   * |-- miniTextEl
   * |-- blurredBgEl (absolute)
   * '-- mirrorEl (absolute)
   *
   */

  constructor() {
    super();
    this.mainTextEl = document.createElement('h1');
    this.subTextEl = document.createElement('h2');
    this.miniTextEl = document.createElement('p');
    this.blurredBgEl = document.createElement('img');
    this.mirrorEl = document.createElement('div');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================

    this.setAttribute('showing', 'false');
    const mainText = this.getAttribute('main-text');
    const subText = this.getAttribute('sub-text');
    const miniText = this.getAttribute('mini-text');
    const bgImgSrc = this.getAttribute('background-image');

    // Children ================================================================

    this.mainTextEl.textContent = mainText;
    this.subTextEl.textContent = subText;
    this.miniTextEl.textContent = miniText;
    this.blurredBgEl.src = bgImgSrc;

    // Styles ==================================================================

    Object.assign(this.style, {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    });

    Object.assign(this.mainTextEl.style, {
      position: 'relative',
      fontSize: '3em',
      color: Colour.white, filter: 'blur(3px)', opacity: 0,
      transform: 'translateY(-100px)',
      transition: 'transform 1s, opacity 1s, filter 1s',
    });

    Object.assign(this.subTextEl.style, {
      position: 'relative', left: '60px',
      color: Colour.gray80, filter: 'blur(3px)', opacity: 0,
      fontSize: '2em',
      transform: 'translateX(200px)',
      transition: 'transform 1.5s, opacity 1.5s, filter 1.5s',
    });

    Object.assign(this.miniTextEl.style, {
      position: 'relative', right: '50px',
      fontSize: '1.5em',
      color: Colour.gray60, filter: 'blur(3px)', opacity: 0,
      transform: 'translateX(-200px)',
      transition: 'transform 2s, opacity 2s, filter 2s',
    });

    Object.assign(this.mirrorEl.style, {
      position: 'absolute',
      width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent, backdropFilter: 'blur(3px)',
      zIndex: '0',
    });

    Object.assign(this.blurredBgEl.style, {
      position: 'absolute',
      width: 'auto', height: '40%',
      margin: 0, padding: 0, border: 0,
      zIndex: '-1', opacity: 0.25,
    });

    // Append ==================================================================   

    this.appendChild(this.mirrorEl);
    this.appendChild(this.blurredBgEl);
    this.appendChild(this.mainTextEl);
    this.appendChild(this.subTextEl);
    this.appendChild(this.miniTextEl);

    // Events ==================================================================

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.parentElement.setAttribute('showing', 'true');
        }
        else {
          entry.target.parentElement.setAttribute('showing', 'false');
        }
      });
    });
    observer.observe(this.mainTextEl);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // handle the showing attribute changes
    if (name === 'showing') {
      if (newValue === oldValue) return;
      const mainTextElement = this.querySelector('h1');
      const subTextElement = this.querySelector('h2');
      const miniTextElement = this.querySelector('p');
      if (newValue === 'true' && oldValue === 'false') {
        mainTextElement.style.opacity = 1; 
        mainTextElement.style.filter = 'blur(0px)';
        mainTextElement.style.transform = 'translateY(0px)';
        subTextElement.style.opacity = 1;
        subTextElement.style.filter = 'blur(0px)';
        subTextElement.style.transform = 'translateX(0px)';
        miniTextElement.style.opacity = 1;
        miniTextElement.style.filter = 'blur(0px)';
        miniTextElement.style.transform = 'translateX(0px)';
      }
      else if (newValue === 'false' && oldValue === 'true') {
        mainTextElement.style.opacity = 0;
        mainTextElement.style.filter = 'blur(3px)';
        mainTextElement.style.transform = 'translateY(-100px)';
        subTextElement.style.opacity = 0;
        subTextElement.style.filter = 'blur(3px)';
        subTextElement.style.transform = 'translateX(200px)';
        miniTextElement.style.opacity = 0;
        miniTextElement.style.filter = 'blur(3px)';
        miniTextElement.style.transform = 'translateX(-200px)';
      }
    }
  }
}


customElements.define('mj-section-textalone', MjSectionTextalone);
