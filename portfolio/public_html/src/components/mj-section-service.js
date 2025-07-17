
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



class MjSectionService extends MjSection {

  /* Structure
   *
   * mj-section-service
   * |
   * |-- detectorEl layer:0
   * |-- planeBgEl layer:0
   * |-- gradientBgEl layer:0
   * |-- serviceContainer layer:1
   * |   |-- serviceText
   * |   |   |** serviceTitle
   * |   |   '** serviceDescription
   * |   '-- serviceMedia
   * '-- switchEl layer:2
   *
   */

  constructor() {
    super();
    this.detectorEl = document.createElement('div');
    this.planeBgEl = document.createElement('img');
    this.gradientBgEl = document.createElement('div');
    this.serviceContainer = document.createElement('div');
    this.serviceText = document.createElement('div');
    this.serviceMedia = document.createElement('img');
    this.switchEl = document.createElement('div');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================

    this.setAttribute('showing', false);
    const subtitle = this.getAttribute('subtitle');
    const description = this.getAttribute('description');
    const imgSrc = this.getAttribute('img-src');
    
    // Children ================================================================

    this.detectorEl.className = 'detector';

    this.planeBgEl.className = 'plane-bg';
    this.planeBgEl.src = '/src/assets/plane-bg.webp';

    this.gradientBgEl.className = 'gradient-bg';

    this.serviceContainer.className = 'service-container';

    this.serviceText.className = 'service-text';
    this.serviceText.innerHTML = `
      <h1 class="service-title">${subtitle}</h1>
      <p class="service-description">${description}</p>
    `;

    this.serviceMedia.className = 'service-media';
    this.serviceMedia.src = imgSrc;

    this.switchEl.className = 'switch';

    // Styles ==================================================================
      
    Object.assign(this.style, {
      position: 'relative', zIndex: '0',
      display: 'flex',
      flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
      overflow: 'visible',
    });

    Object.assign(this.detectorEl, {
      position: 'absolute', zIndex: '0',
      width: '100%', height: '1px',
      margin: 0, padding: 0, border: 0,
    });

    Object.assign(this.planeBgEl.style, {
      position: 'absolute', zIndex: '0',
      width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      objectFit: 'fill',
    });

    Object.assign(this.gradientBgEl.style, {
      position: 'absolute', zIndex: '0',
      width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundImage: `linear-gradient(
        to bottom, ${Colour.black} 10%, ${Colour.transparent80} 50%, ${Colour.black} 90%
      )`,
    });

    Object.assign(this.serviceContainer.style, {
      position: 'relative', zIndex: '1',
      display: 'flex',
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      transition: 'all 1s',
    });

    Object.assign(this.serviceText.style, {
      display: 'flex',
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      width: '50%', height: '50%',
      margin: 0, padding: 0, border: 0,
      fontSize: '1.5em',
      textAlign: 'center',
    });

    Object.assign(this.serviceMedia.style, {
      width: 'auto', height: '40%',
      margin: 0, padding: 0, border: 0,
      borderRadius: '10px',
    });

    Object.assign(this.switchEl.style, {
      position: 'absolute', zIndex: '2', left: '0',
      width: '2vw', height: '100%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: [
        Colour.persimmon,
        Colour.persimmonLow,
        Colour.persimmonDark,
        Colour.iceBlue,
        Colour.iceBlueLow,
        Colour.sage,
        Colour.sageLow,
      ][Math.floor(Math.random() * 7)],
      transition: 'all 1s',
    });

    // Append ==================================================================

    this.appendChild(this.detectorEl);
    this.appendChild(this.planeBgEl);
    this.appendChild(this.gradientBgEl);
    this.appendChild(this.serviceContainer);
    this.serviceContainer.appendChild(this.serviceText);
    this.serviceContainer.appendChild(this.serviceMedia);
    this.appendChild(this.switchEl);

    // Events ==================================================================

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setAttribute('showing', true);
        } else {
          this.setAttribute('showing', false);
        }
      });
    });
    observer.observe(this.detectorEl);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'showing':
        if (newValue === 'true') {
          this.switchEl.style.width = '10vw';
          this.serviceContainer.style.opacity = 1;
          this.serviceContainer.style.transform = 'translateX(0%)';
        }
        else if (newValue === 'false') {
          this.switchEl.style.width = '2vw';
          this.serviceContainer.style.opacity = 0;
          this.serviceContainer.style.transform = 'translateX(-50%)';
        }
        break;
      default:
        break;
    }
  }
}


customElements.define('mj-section-service', MjSectionService);
