# Описание проекта

Форма обратной связи, разработанная в рамках тестового задания при устройстве на вакансию **Frontend-разработчик** в компанию **Southmedia**.

Форма сверстана с помощью** HTML/CSS(SCSS)**. Все скрипты написаны на нативном **JavaScript**, типизированном с помощью **TypeScript**. Он позволяет свести появление ошибок к минимуму, а подсказки IDE за счет типизации очень помогают при разработке.

При обработке формы происходит валидация полей Имя, Телефон, Почта. Для проверки корректного ввода телефона и почты используется библиотека **[validator.js](https://www.npmjs.com/package/validator 'validator.js')**, которая является одной из самых популярных и удобных пакетов для валидации.

Маска номера телефона работает с помощью библиотеки [**imaskjs**](https://www.npmjs.com/package/imask '**imaskjs**'), которая также является популярным решением на нативном JavaScript.

Решение для кастомного селекта найдено давно на одном из ресурсов и было мной полностью переписано и доработано. В частности, добавлена возможность выбрать селект без использования мышки (с помощью фокуса через кнопку Tab). Решение масштрабируемое, достаточно подключить скрипт инициализации селекторов необходимую разметку. Стили каждого селектора также можно изменить через стили.

В форме есть возможность добавления файла, а также его удаления в последующем. Решение написано мной на нативном JavaScript.

Отправка данным на сервер происходить с помощью библиотеки [**axios**](https://www.npmjs.com/package/axios '**axios**'). Считаю использование данного пакета более удобным, чем нативный fetch. Axios позволяет создавать несколько экземпляров api, если нужно отправлять данный на разные сервера. Также некоторые вещи уже автоматизированы, что позволяет писать меньше кода. Асинхронный код работает с помощью конструкции async/await, обернутой в try/catch для обработки ошибок. Конструкции async/await позволяет более лаконичный, понятный код, по сравнению с нативным fetch, использующий цепочку из конструкций then/catch.

# Инструкция по установке:

1. Склонировать репозиторий локально
2. Установить зависимости с помощью команды `npm i` (должен быть установлен [Node.js](https://nodejs.org/en/download/ 'Node.js'))
3. Для запуска локального сервера использовать команду `npm start`, для сборки бандла использовать команду `npm run build`