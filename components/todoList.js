class TodoList extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }

    render() {
        let todos = JSON.parse(this.getAttribute('todos'));
        todos.forEach((t, i) => {
            this.insertAdjacentHTML('beforeend',`
                <todo-item text="${t}"></todo-item>
            `);
        });
    }

    disconnectedCallback() {
    }
}
window.customElements.define('todo-list', TodoList);