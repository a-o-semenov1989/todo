import React, {Component} from 'react'; //подключаем библиотеки
import ReactDOM from 'react-dom';

import App from './components/app'
import TodoListItem from "./components/todo-list-item/todo-list-item"; //получаем Арр из соответствующей папки

ReactDOM.render(<App/>, //ReactDOM.render в качестве первого аргумента принимает элемент, а не компонент - обязательно <App/>
    document.getElementById('root')); //рендер элемента на странице, первым аргументом передаем элемент который хотим отрендерить, вторым аргументом передаем элемент на странице в который хотим поместить

/*реакт элементы и компоненты
//РеактДОМ - библиотека которая превращает ВиртуалДОМ(реакт элементы) в обычные браузерные ДОМ элементы и рендерит их на странице
//react компоненты начинаются с большой буквы
//реакт элемент - маленький легковесный объект, часть концепции VirtualDOM, для работы с которым нужно намного меньше ресурсов
//реакт элементы могут содержать в себе другие элементы, создавая дерево элементов
//элемент - блок jsx кода (const a = <h1>Hello World!</h1>;)
//return ( //возвращаем блок jsx, который превратится в реакт элемент
//компонент - функции, которые возвращают Реакт элемент - const AppHeader = () => {
//     return <h1>My Todo List</h1>;
// };
//пользовательские интерфейсы состоят из компонентов (это независимые блоки польз. инт. которые могут иметь свое собственное поведение)
//имя компонента можно использовать в jsx как html таг
//компоненты можно использовать многократно на странице или менять их
//Как разбивать на компоненты: 1) если можно представить что кусок инт. можно использовать еще где-то и он выполняет отдельную независимую функц., то нужно выносить его как отдельный компонент. 2) если код становится слишком большим, его нужно разбить на компоненты
*/

/*jsx
//позволяет использовать выражения {foo.bar}
//аттрибуты называются camelCase'ом
//class = className, for = htmlFor - исключения по написанию в jsx по сравнению с хтмл
//в свойства можно передавать любое значения
//null, undefined, true, false - в теле тегов игнорируются (не вызывая ошибок)
//если jsx код занимает несколько строк, то его нужно взять в круглые скобки, если одну - не обязательно. Блок jsx кода возрващает или созает реакт элемент, jsx код превращается в вызов функции ReactСreateElement, поэтому корнем jsx фрагмента должен быть один элемент (например для создания
// const el = (
// <span>ONE</span>
// <span>TWO</span>);
// их нужно обернуть в родительский элемент
// const el = (
// <div>
// <span>ONE</span>
// <span>TWO</span>
// </div>);
// jsx похож на html, но умеет намного больше, например использзовать JS выражения и их значения в разметке, для этого надо обернуть их в скобки {}
например:
const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};
можно также использовать не только переменные, но и результаты вызова функций
const time = () => {
    return <span>{ (new Date()).toString()}</span>; // так напрмер можно добавить время
};
const App = () => {
    const isLoggedIn = false; //not logged in
    const loginBox = <span>Log in Please</span>; //при null не отобразится на странице
    const welcomeBox = <span>Welcome Back</span>;

    return (
    style=
    <div>
    //{null, undefined, true, false} в таких случаех не отобразится
    { isLoggedIn ? welcomeBox : loginBox} //использован тернарный if (оператор), при null не отобразится на странице { isLoggedIn ? null : loginBox}
    { loginBox } //добавлен как react элемент в {}, но не как компонент (<LoginBox/>) //в качестве child element так в {} можно использовать только реакт элементы, строки, числа, булевые значения, но нельзя объекты например {new Date}
    </div>
};

const SearchPanel = () => {
    сonst searchText = 'Type here to search' //text
    const searchStyle = { //объект
        fontSize: '25px'
     };

    return <input
    style = {searchStyle} //передаем объект в свойство, а не используем "", потому что иначе передастся просто слово. Обычно стили передаются не инлайн с помощью компонентов, а с помощью className, css классы чтобы манипулировать внешним видом компонентов
    placeholder={searchText} />; //properties (аттрибут в реакт терминологии называеются свойствами) передастся текст как placeholder. для значений свойств не рапспространяются ограниечения как для значения child elements, в качестве аттрибута можно передававть что угодно, не действуют ограничение как с объектами. html тэги ожидают строку в качестве аттрибута, но в для кастомных аттрибутов
};
в jsx название аттрибутов нужно писать камелКейсом с мальнькой буквы,
напр. return <input placeholde={searchText}
    autoComplete = ""
    tabIndex={}
    htmlFor="" //это исключение для написания в jsx html свойств 1)в htmlFor а не for
    className="" //а это 2) в jsx className, а не class
    disabled/>; //если в свойстве не передать значение, то по умолчанию оно true, свойство disabled эквивалентно disabled{true}

В jsx html по умолчанию эскейпится, то есть становится нормальной строкой, которая нормально отобразится в браузере
например
const App = () => {
    const value = '<script>alert("")</script>';
    return( { value } );
};
просто отобразится в брайзере как строка текста <script>alert("")</script> не вызвав алерт
*/

/*структура реакт проекта
один компонент - один файл
Помещаем все компоненты в папку components
Хорошие компоненты - независимые компоненты
 */

/*
props свойства компонентов
объект props передается в каждый компонент
const Comp = (props) => {
    return (<i>{ props.name }</i>);
;
Можно передавать любые значения (не только строки)
как и в обычные хтмл элементы, в реакт компоненты можно передавать свойства, которые будут определять как элемент будет выглядеть и что он будет отображать
например указваем label в
const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee"/></li>
            <li><TodoListItem label="Build React App"/></li>
        </ul>
    );
};
и указываем props (обычное название) в TodoListItem
const TodoListItem = (props) => {
    return <span>{ props.label }</span>;
};
свойство label мы получили из объекта props и передали в <li><TodoListItem label="Drink Coffee"/></li>

благодаря деструктуризации props можно заменить на { label }
const TodoListItem = ( { label } ) => {
    return <span>{ label }</span>;
};

Мы можем передать любые свойства в любые реакт компоненты, чтобы получить свойства со стороны компонентов мы должны использовать объект props, который передается внутри каждой функции (он всегда существует и передается, даже если не мы не передаем никаких свойств в компонент, в таком случае он пустой)
Мы можем прямо при объявлении функции деструктурировать объект props и достать те свойства, которые нам нужны и присовить свойства по умолчанию и затем эти свойства мы можем использовать как обычную переменную, использовать значения в jsx или строить какую-нибудь кастомную логику, по типу выбора цсс стиля в зависимости от наших свойств.
Передавать можно абослютно любые значение - строки как в случае с label, булевые значения как в случае с important, массивы, функции, объекты - любой тип можно передать в качестве свойства другому компоненту
 пример
 const TodoListItem = ( {label, important = false} ) => { //important по умолчанию = false

    const style = {
        color: important ? 'tomato' : 'black' //цвет зависит от значения important, если важный станет красный, если не важный - черный
    };

    return <span style={style}>{ label }</span>; //передаем стайл на спан
};
 */

/* массивы как свойства компонентов
Используя фигурные скобки можно передавать не только элемент, но и массив элементов.
Массив можно передать как свойство.
В jsx можно вставлять массивы элементов (не только по-одному).
Можно передать ВСЕ свойства объекта в компонент используя Object Spread оператор (не перечисляя каждое).
Создаем массив:
const App = () => {  //наше приложение тоже является компонентом

    const todoData = [ //таким образом данные будут хранится на самом верхнем уровне, в компоненте App, если мы решим поменять нашу логику и получать данные с сервера, нам нужно будет переписать только App, все остальные компоненты не будут затронуты, поскольку они будут получать уже готовые данные
        { label: 'Drink Coffee', important: false },
        { label: 'Make Awesome App', important: true },
        { label: 'Have a Lunch', important: false },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/> //передаем значение массива todoData как свойство
        </div>
    );
};
Так можно получить по индексу получаем доступ к данным массива и использовать как свойство, но данный метод не очень хорош
const TodoList = ({ todos }) => { //используя деструктуризацию передаем тудус в тудуЛист
    return ( //возвращаем блок jsx, который превратится в реакт элемент
        <ul>
            <li>
                <TodoListItem
                    label={todos[0].label} //указываем лейбл тудус с нулевым индексом и значение импортант
                    important={todos[0].important} />
            </li>
            <li>
                <TodoListItem
                    label={todos[1].label}
                    important={todos[1].important} />
            </li>
        </ul>
    );
};
/*Используя фигурные скобки можно вставить внутрь jsx массив элементов
const TodoList = ({ todos }) => {

    const elements = todos.map((item//todo item с которым мы работаем//) => {  // создаем массив элементс, для каждого элемента массива тудус мы создадим один jsx элемент используя функцию мап
    return ( <li>
            <TodoListItem
                label={item.label}
                important={item.important} />
        </li>
    );
});

return ( //возвращаем блок jsx, который превратится в реакт элемент
    <ul>
        { elements } //используя фигурные скобки мы добавляем все элементы поочередно внутрь нашего ul//
    </ul>
);
};

Теперь вариант с использованием spread оператора для объектов (который позволяет разложить объект на коллекцию ключей и значений), его можно использовать в jsx когда имена свойств компонента совпадают с именами свойств объекта (как в нашем случае лэйбл и импортант)
const TodoList = ({ todos }) => {

    const elements = todos.map((item//todo item с которым мы работаем//) => {  // создаем массив элементс, для каждого элемента массива тудус мы создадим один jsx элемент используя функцию мап
    return ( <li>
            <TodoListItem {... item } /> // {... item } мы берем каждое свойство из объекта item и передать его в качестве аттрибута вместе со значением в туду лист итем
        </li>
    );
});

return ( //возвращаем блок jsx, который превратится в реакт элемент
    <ul>
        { elements } //используя фигурные скобки мы добавляем все элементы поочередно внутрь нашего ul//
    </ul>
);
};
*/

/* коллекции и ключи

каждому jsx элементу в массиве нужно уникальное свойство key.
React использует key чтобы эффективно сравнивать элементы при обновлении.
Не стоит делать ключи из индексов массива.

добавляем id каждому объекту в списке
const App = () => {  //наше приложение тоже является компонентом

    const todoData = [ //таким образом данные будут хранится на самом верхнем уровне, в компоненте App, если мы решим поменять нашу логику и получать данные с сервера, нам нужно будет переписать только App, все остальные компоненты не будут затронуты, поскольку они будут получать уже готовые данные
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a Lunch', important: false, id: 3 },
    ];

добавляем  ключ
const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {  // создаем массив элементс, для каждого элемента массива тудус мы создадим один jsx элемент используя функцию мап
        return ( <li key={item.id} //добавляем ключ>
                    <TodoListItem {... item } />
                 </li>
        );
    });
каждый раз реакт рэндерит приложение, он пытается определить какие именно элементы были измененились в ДОМ дереве и обновить только эти части страницы. Это нужно для оптимизации работы.
Процесс поиска изменений называется reconcilation algoritm. Ключи нужны чтобы реакт мог сравнить элементы по ключам, это упрозает обновление и поиск изменений.
Нет смысла использовать в качестве ключа индекс элемента в массиве, поскольку не смотря на то что мы избавимся от предупреждения, мы не получим необходимой производительности.

 const elements = todos.map((item) => {  // создаем массив элементс, для каждого элемента массива тудус мы создадим один jsx элемент используя функцию мап

        const { id, ... itemProps } = item; //используем деструктуризацию, в itemProps идут все свойства кроме id

        return ( <li key={ id } >
                    <TodoListItem {... itemProps } /> //сюда передаются все свойства item кроме id
                 </li>
        );
    });
 */

/* как подключить css
css фреймворки (вроде Bootstrap) можно подключать в index.html
css для компонентов удобно хранить в отдельных файлах: 1 компонент = 1 css файл
WebPack поддерживает импорт Css файлов из JavaScript модулей
import './todo-list.css'; //импортируем css
поскольку мы используем вебпак для того чтобы собрать наш проект. Вебпак запущен постоянно на фоне, он умеет проходить по нашим файлам и находить модули, те импорты которые мы используем.
Вебпак умеет работать не только с js, но и с css. Вебпак знает что если в нашем файле js встречается такой импорт css вместо js (как в примере выше), его нужно обработать по-другому - извлечь код из файла и вставить на страницу.
В реакт проектах типичный паттерн называть css файлы точно так же как называются файлы с компонентами (напр. todo-list.css и todo-list.js).
Для удобства работы с css следует каждый корневой jsx элемент который мы возвращаем из компонента, будет содержать класс точно такой же как и название компонента (напр. className=todo-list для TodoList).
Один компонент в одном файле, один css файл для одного компонента, который называется точно так же как  и файл с js. И корневой элемент имеет класс, такой же как и название файла
 */

/* структура реакт проекта 2
Файлы компонента удобно хранить в отдельной папке.
Кроме JS и CSS у компонента могут быть файлы с юнит-тестами и другими ресурсами.
Если в папке есть файл index.js, то он импортируется по-умолчанию.
 */

/*компоненты-классы (stateful компоненты)
Классы используются, когда нужно хранить состояние
Классы наследуют React.Component
Метод render() возвращает элемент (как в функциональном компоненте)
Ранее мы использовали функции для создания компонентов. Функция принимает на вход объект со свойствами для компонента (props, как правило мы сразу деструктурируем его и достаем нужное нам свойство, чтобы затем использовать в коде компонента). А возвращает эта функция Реакт Элемент. Но у функций нет внутреннего состояния, то есть нам не куда сохранить свойства компонента, которые могут изменяться во время работы программы
В Реакт есть также компоненты основанные на классах. Классы используются когда у компонента должно быть внутреннее состояние (большинство динамических, интерактивных элементов будут иметь его и потому они будут компонентами классами)
пример функция:
const TodoListItemFunc = ({label, important = false}) => { //important по умолчанию = false

    const style = {
        color: important ? 'steelblue' : 'black', //цвет зависит от значения important, если важный станет красный, если не важный - черный
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style} //передаем стайл на спан//>
{label}
</span>

<button type="button"
className="btn btn-outline-success btn-sm float-right">
    <i className="fa fa-exclamation" //используем фонт аусом// />
    </button>

<button type="button"
        className="btn btn-outline-danger btn-sm float-right">
    <i className="fa fa-trash-o" />
</button>
</span>
);
};
пример класс
export default class TodoListItem extends React.Component { //наследуем реакт компонент //экспортируем класс
    render() {

        const { label, important = false } = this.props; //в классе свойства хранятся как поле этого класса //вместо того чтобы принимать props на вход у класса пропс хранятся в  this.props //important по умолчанию = false

        const style = {
            color: important ? 'steelblue' : 'black', //цвет зависит от значения important, если важный станет красный, если не важный - черный
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style} //передаем стайл на спан//
{label}
</span>

<button type="button"
className="btn btn-outline-success btn-sm float-right">
    <i className="fa fa-exclamation" //используем фонт аусом// />
    </button>

<button type="button"
        className="btn btn-outline-danger btn-sm float-right">
    <i className="fa fa-trash-o" />
</button>
</span>
);
};
}
Если сразу не видно причин для использования компонента класса, тогда используем компонент функцию, если затем компоненту все же нужно работать с внутренним состоянием, всегда можно сделать рефакторинг и превратить комп функцию в комп класс.
*/

/*обработка событий

чтобы зарегистрировать функцию как event listener, для этого используем onНазваниеСобытия (кэмелКейсом)
Добавить свойство onClick (onBlur, onMouseOver, и т.д.) к элементу
Передать функцию
Убедиться, что this сохранит правильное значение внутри функции (типичная ошибка)
функция онклик с помощью суперкласса
export default class TodoListItem extends Component { //наследуем реакт компонент

    constructor() {
        super(); //вызов суперконструктора

        this.onLabelClick = () => { //таким образом мы создаем функцию не на прототипе класса, а на самом объекте
            console.log(`Done: ${this.props.label}`);
        };
    }

    render() {
        const { label, important = false } = this.props; //в классе свойства хранятся как поле этого класса //вместо того чтобы принимать props на вход у класса пропс хранятся в  this.props //important по умолчанию = false

        const style = {
            color: important ? 'steelblue' : 'black', //цвет зависит от значения important, если важный станет красный, если не важный - черный
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style} //передаем стайл на спан//
onClick={ ()=> this.onLabelClick } //передаем сюда функцию, не вызываем, поэтому не пишем круглые скобки, иначе мы передали бы undefined//>
{label}
</span>

<button type="button"
className="btn btn-outline-success btn-sm float-right">
    <i className="fa fa-exclamation" //используем фонт аусом// />
    </button>

<button type="button"
        className="btn btn-outline-danger btn-sm float-right">
    <i className="fa fa-trash-o" />
</button>
</span>
);
};
}
или можно так как в финальном коде
*/

/*State - состояние компонента
Состояние хранится в поле state.
this.state инициализируется в конструкторе или в теле класса.
После инициализации state нельзя изменять (только читать).
Чтобы обновить state - setState ()

В реакте внутреннее состояние компонента хранитсяв специальном поле, которое называется state. Его можно инициализировать в конструкторе

export default class TodoListItem extends Component { //наследуем реакт компонент

    state = {
        done: false //по умолчанию устанавливаем false
    };

    onLabelClick = () => { //таким образом мы создаем функцию не на прототипе класса, а на самом объекте
        this.setState ({ //устанавливаем состояние компонента и заново выпускается функция рендера и функция рендер возвращает новую структуру для нашего компонента. Внашем случае менятся класс и РЕакт запускает свой reconsilation алгоритм и находит что у элемента изменился класс и реакт обновляет только этот маленький параметр в ДОМ дереве и после этого наш элемент на страничке получает новый класс и теперь он выглядит зачеркнутым.
            done: true //при клике меняем состояние з done на true
        });
    };

    render() {
        const { label, important = false } = this.props; //в классе свойства хранятся как поле этого класса //вместо того чтобы принимать props на вход у класса пропс хранятся в  this.props //important по умолчанию = false

        const { done } = this.state; //получаем done при помощи синтаксиса деструктуризации из this.state

        let classNames = 'todo-list-item'; //формируем список классов
        if (done) { //в случае done или нет мы добавляем к classNames класс done
            classNames += ' done';
        }

        const style = {
            color: important ? 'steelblue' : 'black', //цвет зависит от значения important, если важный станет красный, если не важный - черный
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          style={style} //передаем стайл на спан//
onClick={ this.onLabelClick } //передаем сюда функцию, не вызываем, поэтому не пишем круглые скобки, иначе мы передали бы undefined//>
{label}
</span>

<button type="button"
className="btn btn-outline-success btn-sm float-right">
    <i className="fa fa-exclamation" //используем фонт аусом// />
    </button>

<button type="button"
        className="btn btn-outline-danger btn-sm float-right">
    <i className="fa fa-trash-o" />
</button>
</span>
);
};
}

Важное правило: После того как мы первый раз проинициализировали state его больше нельзя изменять напрямую, его можно читать. Для того чтобы его установить нужно использовать функцию this.setState
*/

/*как работает setState
в setState() нужно передавать только изменения в state
когда мы добавляем новые элементы к текущему стэйту мы не обновляем предыдущий вызов сетСтэйта. сетСтэйт принимает только ту часть стэйта, которая должна измениться. Новый объект накладывается поверх существующего стэйта.
функция сетСтэйт принимает не полный стэйт, а только те значения которые нужно изменить, а РЕакт в свою очередь сам позаботится о том чтобы объеденить текущее значение с новыми.
 */

/*Обновление состояние, зависящее от предыдущего состояния
setState принимает функцию
аргумент - текущий state
this.setState((state) => {
    return {
        count: state.count + 1
    }
});

Функция setState  иногда может работать асинхронно. Поэтому безопаснее считать что тот стейт, который мы устанавливаем, устанавливается не моментально, а может быть установлен позже. В момент клика (или например нажатия на кнопку), значение стейт еще может быть не обновленным. То есть возможно есть кусочек стейта, который еще не был присвоен this.state. Реакт это делает для оптимизации.
Поэтому мы вызываем сет стейт немного иначе и передаем в сетСтейт еще одну функцию, которая принимает наш текущий стейт. Когда мы передаем в сетСтейт функцию это сигнал для Реакта, что этот код нужно выполнить только тогда когда наш текущий стейт уже будет в финальном состоянии и его можно будет использовать для того чтобы вычислить новый стейт. То есть всегда когда мы вычисляем новый стейт
в зависимости от того какой текущее значение нашего стейта нам нужно использовать такую форму:
    onLabelClick = () => { //таким образом мы создаем функцию не на прототипе класса, а на самом объекте
        this.setState (({done}) => { //устанавливаем состояние компонента и заново запускается функция рендера и функция рендер возвращает новую структуру для нашего компонента. В нашем случае менятся класс и РЕакт запускает свой reconsilation алгоритм и находит что у элемента изменился класс и реакт обновляет только этот маленький параметр в ДОМ дереве и после этого наш элемент на страничке получает новый класс и теперь он выглядит зачеркнутым.
           return {
               done: !done //при клике меняем состояние с false на true
           }
        });
    };

    onMarkImportant = () => {
        this.setState (({important}) => { //используем деструктуризацию
            return {
                important: !important //благодаря деструктуризации не указываем ссылку на стейт
            }
        });
    };
 Такой код безопасен для Реакт и всегда будет исполнятся корректно.
 Если его не использовать, а использовать код который напрямую будет устанавливать стейт, могут быть ошибки которые сложно отследить.
 Если наше состояние никак не зависит от нашего предыдущего состояния, мы можем использовать сетСтейт и передавать внутрь объект. Если же состояние зависит от предыдущего (к примеру изменить значение с true на false и обратно или увеличить счетчик или сделать любое другое действие, которое основано на текущем значении стейта, а не которое полностью независимо). Тогда нам нужно использовать показанную выше форму, и вызвать функцию тогда, когда стейт готов.
 */

/*Собственная система событий
Любой компонент может генерировать собственные события (onDone, onAdded,...)
Достаточно передать callbaсk функцию, как property, а затем вызвать ее из компонента, когда наступило событие.
Через события, данные поднимаются "вверх" по иерархии компонентов.

схема расположения данных
<App>  <---- todoData(массив)
    <AppHeader>
    <SearchPanel>
    <ItemStatusFilter>
    <TodoList>
        <TodoListItem> <--- Button
        <TodoListItem>
Для того чтобы убрать данные в TodoListItem нам нужно чтобы данные вверху иерархии обновились, другими словами чтобы элемент App как-то узнал, что кнопка в TodoListItem была нажата.
Мы можем передать эти данные наверх, используя свою собственную систему событий.
TodoListItem будет генерировать события, которые будет слушать TodoList и он передаст это событие еще выше - в элемент Арр. Элемент Арр обновит массив, и уже после обновления TodoListItem исчезнет как и было задумано, поскольку соответсвующего элемента в массиве не будет.
 кастомные ивенты мы используем для того чтобы передать данные от элементов внизу иерархии вверх по иерархии
 */

/*setState() - удаление элемента
setState() не должен изменять текущий state.
Методы которые изменяют (mutate) массив использовать нельзя.
newArr = [...oldArr.slice(0, idx), ...oldArr.slice(idx+1)]; - не изменяет oldArr

Такой код не нужно использовать, поскольку нарушается правило изменения стейта напрямую, поскольку может привести к ошибкам.
deleteItem = (id) => {
        this.setState(({ todoData }) => { //получаем массив с данными
            const idx = todoData.findIndex((el) => el.id === id); //находим индекс элемента и сравниваем с указанным для удаления
            todoData.splice (idx, 1); //удаляет элемент по индексу внутри массива

            return {
                todoData: todoData //возвращаем новое состояние
            }
        });
    };

Вместо этого нам нужно вернуть новый массив, который содержит все элементы старого массива, кроме удаленного элемента
[a, b, c, d, e] //например нужно удалить с
[a, b,    d, e] //так будет выглядеть массив после удаления, он состоит из 2 частей. 1 будет состоять из элементов, что расположены до удаленного и 2 часть из тех, что после удаленного элемента.
const before = todoData.slice(0, idx); //Для того чтобы получить элементы расположенные до удаленного, мы будем использовать метод слайс (он не изменяет существующий массив и поэтому можно использовать). Слайс принимает два аргумента - начало и конец сегмента который мы будем копировать. Начало сегмента у на 0, а конец сегмента это индекс idx, который мы удаляем.
const after = todoData.slice(idx+1); //After будет работать точно так же, вторая половина нового массива будет состоять из компонентов todoData, которые расположены после индекса, с места индекс +1, поскольку сам индекс будет удален до конца (и если мы не передаем второй аргумент это будет означать с индекс+1 до конца массива).
const newArray = [... before, ... after]; //новый массив, используя спред оператор для массивов элементов before, а затем все элементы after
 return {
 todoData: newArray //новый массив передаем в todoData в качестве состояния
 };
 таким способом удаляются элементы из массива, так чтобы не изменять существующий массив - берем все элементы до удаленного и все элементы после удаленного с помощью метода слайс и затем конструируем новый массив из этих элементов, кроме удаленного.
 */

/*setState() - добаление элементов
arr.push() - тоже изменение массива (нельзя выполнять на массивах из state).
Добавить элемент в конец массива const newArr = [...oldArr, newItem]
Добавить элемент в начало массива const newArr = [newItem, ...oldArr]
 */

/*данные в Реакт
Централизовать управление данными - хорошая практика.
Если данные нужно использовать в нескольких компонентах - их нужно хранить в родительском компоненте.
Чтобы "поднять" данные вверх по иерархии компонентов, используйте события.
 */

/*setState() обновление элемента
oldObj нельзя изменять
oldObj = oldArr[idx];

... но можно скопировать в новый объект
newObj = { ...oldObj, prop: newValue };
newArr = [ ...oldArr.slice(0,idx),
            newObj,
            ...oldArr.slice(idx + 1)];
 */

/*работа с формами
Используем onChange() чтобы получать текущее значение.
onSubmit() - событие "отправки" формы.
e.preventDefault() - чтобы страница не перезагружалась

для того чтобы получать значение input мы используем значение onChange и каждый раз когда значение инпута меняется - мы вызываем нашу собственную функцию onLabelChange и используем объект e (event), мы достаем из него текущее значение поля.
Затем нам нужно использовать ивент onSubmit для того чтобы отловить тот момент когда пользователь сабмиттит отправляет форму, это может быть тот момент когда пользователь нажимает энтер в поле формы или когда он нажимает мышкой на кнопку на форме.
И тогда мы говорим e.preventDefault(); для того чтобы браузер не перезапускал страницу (это поведение по умолчанию для формы).
Мы передаем наше значение из нашего label из нашего поля ввода и затем компоненты выше по иерархии знают что нужно сделать когда пользователь создает новый item
 */

/*Контролируемые компоненты
onChange() обновляет state, a state обновляет value элемента.
state - единственный источник значений.
Легко обновлять value, можно обновлять не только в ответ на ввод пользователя.

для того чтобы сделать элемент контролируемым нам нужно сделать так, чтобы value этого элемента устанавливалось из state нашего компонента и это наш способ контролировать этот элемент
 */

/*реализуем поиск
Компонент App получил новый элемент state, в котором мы храним текст для поиска.
Перед тем, как отображать элементы в render() мы отфильтровываем нужные.
Компонент SearchPanel генерирует событие onSearchChange на каждое нажатие клавиши (чтобы App обновлял список)

мы фильтруем наш список по значению term из state. Мы получаем это состояние и обновляем когда пользователь печатает значение в поле ввода

 */

/*фильтр
Фильтры работают на 90% так же, как поиск
В компоненте ItemStatusFilter мы вынесли описание кнопок в отдельный массив, чтобы не дублировать if'ы для каждой.
Текущая активная кнопка передается, как свойство. Это продолжение идеи "Контролируемых компонентов".

мы сделали так, чтобы app.js мог фильтровать элементы. Для этого мы создали еще одну функцию, которую назвали filter, она принимает массив элементов itesm и текущий filter (может быть алл, эктив или дан).
Мы использовали итемс.фильтер для того чтобы выбрать только те элементы, которые соответствуют фильтру.
Затем мы установили еще один параметр для state, filter. Этот параметр будет обновляться в результате события с нашего компонента, который содержит 3 кнопки.
Event Listener в нашем случае называется onFilterChange. Именно он обновляет состояние нашего компонента.
В itemStatusFilter для удобства мы вынесли список кнопок в виде отдельного массива их название и название их фильтров.
Затем мы проходимя по этому массиву и для каждого элемента создаем индивидуальную кнопку.
Для каждой кнопки мы определяем активна она сейчас или нет. И если она активна мы устанавливаем правильный css в класс, а если не активна мы устнаваливаем другой класс.
И в конце мы возвращаем каждую кнопку в массив кнопок.
 */