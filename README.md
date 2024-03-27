# Запуск программы

1. [Скачайте среду выполнения node.js](https://nodejs.org/en)
2. Клонируйте git репозиторий на свое устройство
3. Откройте консоль в корневой папке и напишите
```bash
npm i 
```
4. Создайте файл **.env** и добавте поля со своими значениями
```Dotenv
NEXTAUTH_SECRET= #Секрет, например любая комбинация символов
NEXTAUTH_URL=http://localhost:3000/
MONGO_URL= #Ссылка на mongoDB
```
5. Запустите сервер разработки
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```
Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

# Структура данных
### User
- `id` (Number): индефикатор пользователя
- `name` (String): имя пользователя
- `password` (String): пароль пользователя
- `role` (String): роль пользователя
- `tabs` (Array): массив вкладок
    - `read` (Array: Number)
    - `plans` (Array: Number)
    - `favourites` (Array: Number)
    - `history` (Array: Number)
### Book
- `id` (Number): индефикатор книги
- `name` (Number): название книги
- `author` (String): автор книги
- `genre` (String): жанр книги
- `shelfNumber` (Number): полка книги
- `shelvingNumber` (Number): номер стелажа
- `available` (Boolean): доступна или нет книга

# Описание функциональных блоков
### Блок галвной страницы и поиска
- Отображение списка всех книг в наличии с возможностью фильтрации по жанру или автору
- Информация о каждой книге: название, автор, жанр, местоположение в библиотеке
- Кнопка "Добавить в избранное" для каждой книги
### Блок регистрации и авторизации
- Форма для регистрации нового пользователя
- Форма для входа в систему
- Возможность добавления книги в закладки: "Читаю", "В планах", "История"
### Блок закладок с книгами
 - Отображение списка книг, добавленных пользователем в избранное
- Возможность просмотра закладок по категориям: "Читаю", "В планах", "История"
- Кнопка для удаления книги из избранного

# Скриншоты интерфейса
### Форма регистрации
![Изображние](/img/2.png "Форма регистрации")
### Список книг
![Изображние](/img/1.png "Список книг")
### Закладки с книгами
![Изображние](/img/3.png "Закладки с книгами")