# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Тестове завдання для Yalantis React.js School #5

Виконане тестове відправляйте куратору школи на education@yalantis.net  до 24.11.21 включно.
Обов'язково вкажіть своє прізвище та зазначте тему листа "{Прізвище} Тестове завдання для Yalantis React.js School". 


Tech Stack: React + Axios/Fetch
Задача: 
GET: `https://yalantis-react-school-api.yalantis.com/api/task0/users` повертає масив юзерів. У кожного юзера є наступні поля: id, firstName, lastName, dob (дата народження).


Реалізувати:


Завантажити список співробітників з сервера, при потраплянні на сторінку  employees (сторінка /employees буде відкриватися відразу, навігації робити не потрібно).
Відобразити англійський алфавіт.
Співробітник  = FirstName + LastName. Відобразити співробітників, за алфавітом, сортуємо за firstName. Якщо у літери немає співробітників, ставимо «No Employees». Біля кожного співробітника є по 2 RadioButton. По дефолту ‘not active’ (не активний), значення цього radio item буде = false
Якщо хочемо вибирати співробітника, натискаємо на ‘active’,  зі значенням = true. Обраний співробітник повинен бути виділений синім кольором.
У правій частині сторінки є блок Employees birthday, в якому відображаються обрані співробітники, згруповані за назвою місяця їх дня народження та відсортовані по їх lastName (від А до Я). 
Місяці повинні починатися з місяця виконання цього завдання і далі по черзі.
Якщо в місяці немає обраних співробітників/співробітника - виводимо назву місяця з текстом «No Employees».
Якщо ви не обрали нікого зі співробітників, то в блоці Employees birthday пишемо Employees List is empty
Якщо сторінку перезавантажено - обрані співробітники в правому блоку повинні бути збережені. А в лівому блоку Employees, у даних співробітників повинен бути активним radio item ‘active’ та виділено синім кольором їх Fisrst Name + Last Name.


Вимоги до коду:
Використання Prettier.
Використання функціональних компонентів та хуків, ES6 features.
Мінімальний розподіл проекту на логічні частини / папки.


Вимоги до проекту:
Розгорнути додаток, використовуючи create-react-app. 
Створити публічний репозиторій на Github для проекту.
Використовувати UI ліби в проекті заборонено.
UI частина додатку залишається на ваш розсуд. Макет-шаблон, як повинно виглядати, ви знайдете нижче.                                                                                                                                                                                                        



Задеплоїти виконане завдання за допомогою Github page

Буде плюсом:
Використання Redux (redux-toolkit, redux-thunk/saga) та/або React Context в проекті.
Використання TypeScript або опис типізація за допомогою PropTypes.
Мінімально покрити unit-тестами логічні частини в проекті.


ВАЖЛИВО! Якщо робота за функціоналом або візуально не відповідає ТЗ, описаному вище, вона не буде перевірятися.


Виконане завдання надіслати куратору школи на пошту education@yalantis.net з двома лінками: 
Link на GitHub репозиторій 
Link на GitHub Page.



Зверніть увагу! Фідбек по тестовому вам повідомлять до 02.12.21 включно.

Ми залишаємо за собою право відмовитись давати докладний фідбек по тестовому завданню.
