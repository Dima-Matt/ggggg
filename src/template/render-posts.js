import { Storage } from "../core/storage.js";

export const renderPosts = () => {
    let { todoList } = Storage.getUserData();
    if (todoList.length === 0) {
        return '<p class="todos__notice">List is empty</p>';
    }

    const todosForRender = todoList.map((todo) => {
        const style = todo.status === 'done' ? 'todos__item todos__item_done' : 'todos__item'
        return `
            <div class="${style}" data-todo-id=${todo.id}>
                <div class="todos__item-status"></div>
                <p class="todos__item-title">${todo.title}</p>
                <div class="todos__item-edit"></div>
                <div class="todos__item-remove"></div>
            </div>
        `;
    }).join('');

    return todosForRender
};