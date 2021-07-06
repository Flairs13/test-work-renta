# test-work-renta
# Frontend-developer
Тестовое задание для фронтенд разработчика.

# Задача
По представленному макету сделать одностраничное web-приложение ресторана быстрой еды.
Макет: https://www.figma.com/file/JoADQpRXUjpBc5gObZkMIQ/Тестовое-задание.-Главная.?node-id=1:1687

Из обязательных технологий React + Redux. Остальное на ваш вкус.

## Задачу можно выполнить на 3х разных уровнях:

начинающий (вёрстка и отображение данных)
- товары загружаются с бэкэнда при открытии страницы (API отдающее данные реализуйте сами, node.js приветсвуется, но не обязателен)
- категории расположенны на главной странице друг под другом (можно скролить вверх вниз)
- товары разделены по категориям, названия категорий отображаются на панели категорий, при клике на название происходитс скролл к соответствующей категории.
- панель с названиями категорий при скроле вниз "прилипает" к верхней части экрана.
- у меню есть 2‑е вкладки, "доставка" и "самовывоз", при клике на "доставку" должны появляться панели для ввода адреса.
- некоторые товары нельзя получить доставкой, поэтому при включённой вкладке "доставка" они должны скрываться.
- вёрстка должна быть адаптивной (сделайте на свой вкус)

стандарт (функционал корзины и валидация данных)
- товары можно добавить в корзину и удалить из неё. При нажатии на кнопку плюс, товар добавляется в корзину, и появляется кнопки изменения количества товара.
- на кнопке изменения количества товара, при клике на минус, количество товара в корзине уменьшается, при клике на плюс увеличивается.
- общая сумма товара отображается в корзине справа сверху.
- при клике на кнопку корзины, блюда добавленные в корзину должны уйти на бэкэнд (можете отправлять на свой API или просто выводить в консоль), а корзина очищается.
- при выбранной вкладке "доставка", на странице появляются 2а поля для ввода адреса. Нужно проверять заполненность полей адреса и не отправлять данные, пока пользователь не заполнит их, при попытке отправить корзину до заполнения надо показывать тултип.
- состояние корзины надо хранить в redux

продвинутый (отслеживание скролла)
- при скролле страницы, название категории которую просматривает пользователь должно подчёркиваться в панели категорий
- для загружающихся картинок применена Lazy Load

# Формат данных
товар:
```
{
"id" - идентификатор товара.
"name" - название товара
"price" - цена товара
"delivery" - true - если товар доступен для доставки, false - если не доступен
"img" - картинка товара формат разный
}
```

категория:
```
{
"id" - идентификатор категории
"name" - название категории
"products" - массив с ID товаров в категории
}
```

# Результат
- задача рассчитанна в среднем на 12 часов работы (можно дольше, это средняя оценка)
- результатом работы должна быть ссылка на ваш личный репозиторий + ссылка на работающее0 приложение загруженное на хостинг (например на heroku)
- укажите на каком уровне вы выполняли задачу
- напишите сколько времени по факту ушло на выполнение задачи
- в ответе прикрепите ваше резюме
