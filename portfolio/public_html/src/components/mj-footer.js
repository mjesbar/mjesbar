
import { Colour } from "/src/palette.js";


class MjFooter extends HTMLElement {

  /* Structure
   *
   * mj-footer
   * |-- startSepEl
   * |-- contentEl
   * |-- miniTextEl
   * '-- endSepEl
   *
   */

  constructor() {
    super();
    this.contentEl = document.createElement('h1');
    this.miniTextEl = document.createElement('p');
  }

  connectedCallback() {

    // Attributes ==============================================================

    const message = this.getAttribute('message');
    const miniText = this.getAttribute('mini-text');

    // Children ================================================================

    this.contentEl.textContent = message;
    this.miniTextEl.textContent = miniText;

    // Styles ==================================================================

    Object.assign(this.style, {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '25vh',
      margin: 0, padding: 0, border: 0,
      position: 'relative',
      backgroundColor: Colour.transparent,
    });

    Object.assign(this.contentEl.style, {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '80%',
      margin: 0, padding: 0, borderTop: `2px solid ${Colour.persimmonDark}`,
      backgroundImage: `
      linear-gradient(
        to top,
        ${Colour.black} 0%,
        ${Colour.transparent} 30% 70%,
        ${Colour.black} 100%
      )`,
      zIndex: 2,
      fontSize: '3em',
    });

    Object.assign(this.miniTextEl.style, {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '20%',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent,
      color: Colour.gray60,
      fontSize: '1em',
    });

    // Append ==================================================================
  
    this.appendChild(this.contentEl);
    this.appendChild(this.miniTextEl);

    // Events ==================================================================
  }
}


customElements.define('mj-footer', MjFooter);
