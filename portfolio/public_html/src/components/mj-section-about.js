
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



// The general structure of a web component in JavaScript:

class MjSectionAbout extends MjSection {

  /*
   * Structure
   * mj-section-about
   * |-- about-subtitle
   * |-- about-content
   * |-- about-photo
   * '-- detector
   *
   */

  constructor() {
    super();
    this.aboutSubtitleEl = document.createElement('h1');
    this.aboutDescriptionEl = document.createElement('p');
    this.aboutPhotoEl = document.createElement('img');
    this.detectorEl = document.createElement('div');
  }

  connectedCallback() {

    super.connectedCallback();
    
    // Attributes ==============================================================

    const aboutSubtitle = this.getAttribute('subtitle');
    const aboutDescription = this.getAttribute('description');
    const aboutPhoto = this.getAttribute('photo');

    // Children ================================================================

    this.aboutSubtitleEl.className = 'about-subtitle';
    this.aboutSubtitleEl.innerHTML = aboutSubtitle;

    this.aboutDescriptionEl.className = 'about-content';
    this.aboutDescriptionEl.innerHTML = aboutDescription;

    this.aboutPhotoEl.className = 'about-photo';
    this.aboutPhotoEl.src = aboutPhoto;

    this.detectorEl.className = 'detector';

    // Styles ==================================================================
    
    Object.assign(this.style, {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      backgroundImage: `linear-gradient(
        to bottom, ${Colour.black} 20%,${Colour.blackLow})
      `,
    });

    Object.assign(this.detectorEl.style, {
      position: 'absolute',
      width: '100%', height: '1px',
      backgroundColor: Colour.transparent, color: Colour.transparent,
    });

    Object.assign(this.aboutSubtitleEl.style, {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '80%', height: '5vh',
      fontSize: '2.5em', fontWeight: 'bold',
      transition: 'all 0.5s',
      opacity: 0,
      transform: 'translateX(50px)',
    });

    Object.assign(this.aboutDescriptionEl.style, {
      width: '80%', height: 'auto',
      textAlign: 'left',
      fontSize: '1.5em',
      transition: 'all 0.5s',
      opacity: 0,
      transform: 'translateX(-50px)',
    });

    Object.assign(this.aboutPhotoEl.style, {
      marginTop: '2vh',
      width: 'auto', height: '10vh',
      borderRadius: '50%',
      transition: 'all 0.5s',
      opacity: 0,
      transform: 'translateY(50px)',
    });

    // Append ==================================================================

    this.appendChild(this.aboutSubtitleEl);
    this.appendChild(this.aboutDescriptionEl);
    this.appendChild(this.aboutPhotoEl);
    this.appendChild(this.detectorEl);

    // Events ==================================================================

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.aboutSubtitleEl.style.opacity = 1;
          this.aboutDescriptionEl.style.opacity = 1;
          this.aboutPhotoEl.style.opacity = 1;

          this.aboutSubtitleEl.style.transform = 'translateX(0)';
          this.aboutDescriptionEl.style.transform = 'translateX(0)';
          this.aboutPhotoEl.style.transform = 'translateY(0)';
        }
      });
    });
    observer.observe(this.detectorEl);

  }

  // Methods ==================================================================
  // ...
}

customElements.define('mj-section-about', MjSectionAbout);
