class TodoItem extends HTMLElement {

    connectedCallback() {
        const text = this.getAttribute('text');
        this.log('connected',text);
        this.render();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.log('attributeChanged', attr, newValue);
        this.render();
    }

    render() {
        const text = this.getAttribute('text');
        console.log(text);
        this.innerHTML = `
            <p>${text}</p>
        `;
    }

    disconnectedCallback() {
        const text = this.getAttribute('text');
        this.log('disconnected', text);
    }
    
    log(...args) {
        console.log('todo-item', ...args);
    }
}
window.customElements.define('todo-item', TodoItem);