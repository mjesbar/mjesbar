// The general structure of a web component in JavaScript:

class MyComponent extends HTMLElement {

  /*
   * Structure
   * ...
   */

  static get observedAttributes() {
    /*
     * 'value' can be whatever attribute you want to observe
     * Observed Attributes can be reacted with the attributeChangedCallback
     * method.
     */
    return ['value'];
  }

  constructor() {
    super();
    /*
     * shadow is optinal if you desire an
     * encapsulated component. With shadow DOM, the component's styles are
     * encapsulated and won't affect the rest of the page.
     * Initialize the component's properties and state
     */
    this.attachShadow({ mode: 'open' });

    /*
     * The state object is used to store the component's internal state.
     * It should be used to store data that the component needs to keep track of
     * during its lifecycle.
     */
    this.state = {
      value: true,
      // ... more states
    };

    /*
     * Add event listeners to the component's elements
     * This is where you should add event listeners to the component's elements
     * to handle user interactions.
     * For example, if you have a button element in your component, you can add
     * a click event listener to it here.
     *
     * These can be also added in the connectedCallback method.
     */
    this.onclick = () => {
      this.state.value = !this.state.value;
      console.log("state: ", this.state.value);
    }
  }

  connectedCallback() {
    /*
     * Called when the component is added to the DOM tree.
     * This is where you should add the component's elements to the shadow DOM.
     * You can also add event listeners to the component's elements here.
     */
    
    // Attributes ==============================================================

    // Children ================================================================

    // Styles ==================================================================

    // Append ==================================================================

    // Events ==================================================================

  }

  disconnectedCallback() {
    /*
     * Called when the component is removed from the DOM tree.
     * This is where you should remove any event listeners that were added in
     * the connectedCallback method.
     * This is also a good place to clean up any resources that the component
     * may have created.
     */
  }

  attributeChangedCallback(name, oldValue, newValue) {
    /*
     * Called when one of the component's observed attributes changes.
     * This is where you should handle the attribute changes and update the
     * component's state accordingly.
     */
  }

  adoptedCallback() {
    /*
     * Called when the component is moved to a new document.
     * This is where you should handle any cleanup that needs to be done when
     * the component is moved to a new document.
     */
  }

  // Methods ==================================================================
  // ...
}

customElements.define('component-base', MyComponent);
