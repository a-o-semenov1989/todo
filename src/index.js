import React, {Component} from 'react'; //подключаем библиотеки
import ReactDOM from 'react-dom';

import App from './components/app'
import TodoListItem from "./components/todo-list-item/todo-list-item"; //получаем Арр из соответствующей папки

ReactDOM.render(<App/>, //ReactDOM.render в качестве первого аргумента принимает элемент, а не компонент - обязательно <App/>
    document.getElementById('root')); //рендер элемента на странице, первым аргументом передаем элемент который хотим отрендерить, вторым аргументом передаем элемент на странице в который хотим поместить
