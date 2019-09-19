import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css'; //импортируем css

const TodoList = ({ todos, onDeleted, //получаем из пропсов
                      onToggleImportant,
                      onToggleDone }) => {

    const elements = todos.map((item) => {  // создаем массив элементс, для каждого элемента массива тудус мы создадим один jsx элемент используя функцию мап

        const { id, ...itemProps } = item; //используем деструктуризацию, в itemProps идут все свойства кроме id

        return ( <li key={ id } className="list-group-item" /*добавляем класс*/>
                    <TodoListItem
                        {... itemProps }
                        onDeleted={() => onDeleted(id)}
                        onToggleImportant={() => onToggleImportant(id)} //когда элемент сообщит нам о том, что пользователь изменил его важность, мы вызовем onToggleImportant с id элемента
                        onToggleDone={() => onToggleDone(id)}
                    />
                 </li>
        );
    });

    return ( //возвращаем блок jsx, который превратится в реакт элемент
        <ul className="list-group todo-list" /*добавляем класс*/ >
            { elements }
        </ul>
    );
};

export default TodoList; //экспортируем