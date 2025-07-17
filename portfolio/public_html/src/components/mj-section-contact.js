
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



// The general structure of a web component in JavaScript:

class MjSectionContact extends MjSection {

  /*
   * Structure
   * mj-section-about
   * |-- detector
   * |-- contact-subtitle
   * '-- contact-description
   * |-- contact-icons
   *
   */

  constructor() {
    super();
    this.detectorEl = document.createElement('div');
    this.contactSubtitleEl = document.createElement('h1');
    this.contactDescriptionEl = document.createElement('p');
    this.contactIconsEl = document.createElement('div');
  }

  connectedCallback() {

    super.connectedCallback();
    
    // Attributes ==============================================================

    const subtitle = this.getAttribute('subtitle');
    const description = this.getAttribute('description');
    const linkedinLink = this.getAttribute('linkedin');
    const githubLink = this.getAttribute('github');
    const xTwitterLink = this.getAttribute('xtwitter');
    const whatsappLink = this.getAttribute('whatsapp');

    // Children ================================================================

    this.detectorEl.className = 'detector';

    this.contactSubtitleEl.className = 'contact-subtitle';
    this.contactSubtitleEl.innerHTML = subtitle;

    this.contactDescriptionEl.className = 'contact-description';
    this.contactDescriptionEl.innerHTML = description;

    this.contactIconsEl.className = 'contact-icons';
    this.contactIconsEl.innerHTML = `
    <a href="${linkedinLink}" target="_blank">
      <img src="/src/assets/linkedin.webp" alt="LinkedIn Link">
    </a>
    <a href="${githubLink}" target="_blank">
      <img src="/src/assets/github.webp" alt="GitHub Link">
    </a>
    <a href="${xTwitterLink}" target="_blank">
      <img src="/src/assets/twitter.webp" alt="Twitter Link">
    </a>
    <a href="${whatsappLink}" target="_blank">
      <img src="/src/assets/whatsapp.webp" alt="WhatsApp Link">
    </a>
    `;
      

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

    Object.assign(this.contactSubtitleEl.style, {
      display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      width: '80%', height: '5vh',
      fontSize: '2.5em', fontWeight: 'bold',
      transition: 'all 0.5s',
      opacity: 0,
      transform: 'translateX(50px)',
    });

    Object.assign(this.contactDescriptionEl.style, {
      width: '80%', height: 'auto',
      textAlign: 'center',
      fontSize: '1.5em',
      transition: 'all 0.5s',
      opacity: 0,
      transform: 'translateX(-50px)',
    });

    Object.assign(this.contactIconsEl.style, {
      display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      width: '15vw', height: 'auto',
      margin: '3vh 0', padding: 0, border: 0,
      transition: 'all 0.5s',
      opacity: 0,
      transform: 'translateY(50px)',
    });

    // Append ==================================================================
  
    this.appendChild(this.contactSubtitleEl);
    this.appendChild(this.contactDescriptionEl);
    this.appendChild(this.contactIconsEl);
    this.contactIconsEl.querySelectorAll('img').forEach((img) => {
      img.style.width = '5vh';
      img.style.height = '5vh';
      img.style.cursor = 'pointer';
    });
    this.appendChild(this.detectorEl);

    // Events ==================================================================

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.contactSubtitleEl.style.opacity = 1;
          this.contactSubtitleEl.style.transform = 'translateX(0)';
          this.contactDescriptionEl.style.opacity = 1;
          this.contactDescriptionEl.style.transform = 'translateX(0)';
          this.contactIconsEl.style.opacity = 1;
          this.contactIconsEl.style.transform = 'translateY(0)';
        }
      });
    });
    observer.observe(this.detectorEl);

  }

  // Methods ==================================================================
  // ...

}


customElements.define('mj-section-contact', MjSectionContact);
