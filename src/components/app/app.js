import React, { Component } from 'react'; //подключаем библиотеки и импортируем компонент

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends  Component {  //наше приложение теперь класс, мы его экспортируем и экстендим компонент

    maxId = 100;

    state = { //стейт это объект в котором есть свойство тудуДата и это свойство это наш массив
        todoData: [ //таким образом данные будут хранится на самом верхнем уровне, в компоненте App, если мы решим поменять нашу логику и получать данные с сервера, нам нужно будет переписать только App, все остальные компоненты не будут затронуты, поскольку они будут получать уже готовые данные
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all' //active, all, done
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => { //получаем массив
            const idx = todoData.findIndex((el) => el.id === id); //находим индекс элемента и сравниваем с указанным для удаления

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ];

            return {
                todoData: newArray //новый массив передаем в todoData в качестве состояния
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState (({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onSearchChange = (term) =>  {  //фунция принимает новое значение которое вводит пользователь
        this.setState({ term });
    };

    onFilterChange = (filter) =>  {  //фунция принимает новое значение которое вводит пользователь
        this.setState({ filter });
    };

    search (items, term) {
        if (term.length === 0) {
            return items; //если терм пустая строка, мы возвращаем все итемы
        }

         return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1; //возвращаем true если item.label содержит строку (term). indexOf вернет 0 или больше если строка содержится или -1 если строки нет. Больше -1 даст нам все те элементы у которых лейбл это видимый текст на экране строку терм
        });
    }

    filter (items, filter) {

        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }

    }

    render () {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(
            this.search(todoData, term), filter);


        const doneCount = todoData
            .filter((el) => el.done).length; //находим все элементы массива, которые удовлетворяют условию done true. filter не меняет массив, а создает новый, поэтому мы не меняем state. так же мы считаем количество элементов полученного массива
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};
