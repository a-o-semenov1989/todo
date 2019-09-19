import React, { Component } from 'react'; //отдельно импортируем компонент по-именному

import './todo-list-item.css'; //импортируем css

//возвращаем спан, а не li (list item), для того чтобы компоненты были независимы друг от друга, li мог бы использоваться только с ul (unordered list) html элементом. А так он независим и может использоваться где угодно (не только в списке)
export default class TodoListItem extends Component { //наследуем реакт компонент

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props; //в классе свойства хранятся как поле этого класса //вместо того чтобы принимать props на вход у класса пропс хранятся в  this.props //important по умолчанию = false

        let classNames = 'todo-list-item'; //формируем список классов
        if (done) { //в случае done или нет мы добавляем к classNames класс done
            classNames += ' done';
        }

        if (important) { //если это важный элемент то к classNames класс important
            classNames += ' important';
        }

        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={ onToggleDone } /*вызываем ивент листенер, который передали сверху*/ >
          {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}/*добавляем по клику важность*/>
        <i className="fa fa-exclamation" /*используем фонт аусом*/ />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );
    };
}
