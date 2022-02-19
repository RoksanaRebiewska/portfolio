class PortfolioBox extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let urlAddress = this.attributes.urlAddress.value;
    let title = this.attributes.title.value;
    let description = this.attributes.description.value;
    let imageUrl = this.attributes.imageUrl.value;
    let backgroundPosition = this.attributes.backgroundPosition.value;
    this.innerHTML = `
      <div
          class="section__portfolio-wrapper"
          style="background-position: ${backgroundPosition}"
        >
          <div class="section__portfolio--project-name">
          <h3>${title}</h3>
          <p>${description}</p>
          </div>
          <a href=${urlAddress} target="_blank">
            <div
              class="section__portfolio--project-preview"
              style="background: url(${imageUrl}) center top; background-size: 100%;";
            ></div>
          </a>
        </div>
      `;
  }
}

customElements.define('portfolio-box', PortfolioBox);
