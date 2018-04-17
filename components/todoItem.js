class TodoItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }

    render() {
        const text = this.getAttribute('text');
        this.innerHTML = `
            <p>${text}</p>
        `;
    }

    disconnectedCallback() {
    }
}
window.customElements.define('todo-item', TodoItem);