
import { Colour } from '/src/palette.js';
import { MjSection } from '/src/components/mj-section.js';



class MjSectionDual extends MjSection {

  /* Structure
   *
   * mj-section-dual
   * |-- detector
   * |-- ImgEl (absolute)
   * |-- linesContainer
   * |   |-- wordEl1
   * |   |-- wordEl2
   * |   '-- wordElN...
   *
   */

  constructor() {
    super();
    this.detector = document.createElement('div');
    this.linesContainer = document.createElement('div');
    this.ImgEl = document.createElement('img');
    this.wordEl = document.createElement('h1');
  }

  connectedCallback() {

    super.connectedCallback();

    // Attributes ==============================================================

    this.setAttribute('showing', false);
    const imgSrc = this.getAttribute('img-src');
    const imgPos = this.getAttribute('img-pos');
    const lines = this.getAttribute('lines').split(',');

    // Children ================================================================

    this.ImgEl.src = imgSrc;
    this.wordEl.textContent = lines[0];

    // Styles ==================================================================

    Object.assign(this.style, {
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    });

    Object.assign(this.detector.style, {
      position: 'absolute', zIndex: '3',
      width: '100%', height: '1px',
      margin: 0, padding: 0, border: 0,
    });

    Object.assign(this.linesContainer.style, {
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: '100%',
      margin: 0, padding: 0, border: 0,
      overflow: 'hidden',
    });

    Object.assign(this.ImgEl.style, {
      width: '50%', height: 'auto', minWidth: '680px', maxWidth: '50%',
      margin: 0, padding: 0, border: 0,
      zIndex: '1',
      position: 'absolute', top: 0, // left: 0, assigned below depend on attribute
      transition: 'transform 1s',
      userSelect: 'none',
      webkitUserSelect: 'none',
      webkitUserDrag: 'none',
      msUserSelect: 'none',
      pointerEvents: 'none',
    });

    const lineStyle = {
      margin: 0, padding: 0, border: 0,
      opacity: 0,
      transition: 'opacity 1s, transform 1s',
    };

    const notEligibleStyle = {
      fontSize: '6em',
      margin: 0, padding: 0, border: 0,
      color: Colour.gray60,
      cursor: 'default',
    };

    const eligibleStyle = {
      fontSize: '10em', fontWeight: 'bold',
      margin: 0, padding: 0, border: 0,
      cursor: 'pointer',
      transition: 'color 0.25s, font-size 0.25s',
    };

    // Append ==================================================================

    this.appendChild(this.detector);
    this.appendChild(this.linesContainer);

    // apending lines and words
    let lineNumber = 0;
    for (const line of lines) {
      const elegibleWords = ['work', 'service', 'about', 'contact'];
      const words = line.split(' ');
      const lineEl = document.createElement('div');
      Object.assign(lineEl.style, lineStyle);
      for (const word of words) {
        const wordEl = document.createElement('span');
        wordEl.textContent = word;
        if (elegibleWords.includes(word.toLowerCase())) {
          Object.assign(wordEl.style, eligibleStyle);
          wordEl.setAttribute('eligible', true);
        }
        else {
          Object.assign(wordEl.style, notEligibleStyle);
        }
        lineEl.appendChild(wordEl);
      }
      lineNumber++;
      lineEl.setAttribute("line", lineNumber);
      (lineNumber % 2 === 0)
        ? lineEl.style.transform = 'translateX(-200px)'
        : lineEl.style.transform = 'translateX(200px)';
      this.linesContainer.appendChild(lineEl);
    }

    // appending image wheather left or right
    if (imgPos === 'left') {
      this.ImgEl.style.left = 0;
    }
    else if (imgPos === 'right') {
      this.ImgEl.style.right = 0;
    }
    else {
      this.ImgEl.style.left = 50;
    }
    this.appendChild(this.ImgEl);

    // Events ==================================================================

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.parentElement.setAttribute('showing', true);
        }
        else {
          entry.target.parentElement.setAttribute('showing', false);
        }
      });
    });
    observer.observe(this.detector);

    this.querySelectorAll('span[eligible="true"]').forEach((el) => {
      // mouse events
      el.onmouseenter = () => {
        const randColor = [
          Colour.persimmonLow,
          Colour.iceBlueLow,
          Colour.sageLow,
          Colour.persimmon,
          Colour.iceBlue,
          Colour.sage,
        ];
        el.style.color = randColor[Math.floor(Math.random() * randColor.length)];
        el.style.fontSize = '14em';
        el.parentElement.style.zIndex = '2';
      }

      el.onmouseleave = () => {
        el.style.color = Colour.white;
        el.style.fontSize = '10em';
        el.parentElement.style.zIndex = '0';
      }

      el.onclick = () => {
        console.log('click', el.textContent);
        window.location.href = `/${el.textContent.toLowerCase()}`;
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // handle the showing attribute changes
    if (name === 'showing') {
      if (newValue === oldValue) return;
      if (newValue === 'true' && oldValue === 'false') {
        const lineEls = this.linesContainer.children;
        for (const lineEl of lineEls) {
          lineEl.style.opacity = 1;
          lineEl.style.transform = 'translateX(0px)';
        }
        this.ImgEl.style.transform = 'translateX(0px)';
      }
      else if (newValue === 'false' && oldValue === 'true') {
        const lineEls = this.linesContainer.children;
        for (const lineEl of lineEls) {
          lineEl.style.opacity = 0;
          (lineEl.getAttribute('line') % 2 === 0)
            ? lineEl.style.transform = 'translateX(-200px)'
            : lineEl.style.transform = 'translateX(200px)';
        }
        this.ImgEl.style.transform = 'translateY(200px)';
      }
    }
  }
}


customElements.define('mj-section-dual', MjSectionDual);
