
import { Colour } from '/src/palette.js';



export class MjSection extends HTMLElement {

  /*
   * Abstract class for all sections
   */

  static observedAttributes = ['showing'];

  constructor() {
    super();
  }

  connectedCallback() {

    // Attributes ==============================================================
    // Children ================================================================
    // Styles ==================================================================
    
    const MjSectionStyle = {
      width: '100%', height: '100vh',
      margin: 0, padding: 0, border: 0,
      backgroundColor: Colour.transparent,
    };
    Object.assign(this.style, MjSectionStyle);

    // Append ==================================================================
    // Events ==================================================================
  }
}


customElements.define('mj-section', MjSection);
