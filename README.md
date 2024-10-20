## Тестовое Задание
### Инструкция по запуску

1. ```git clone https://github.com/egorsemenovv/products-service-application.git```
2. Далее необходимо собрать docker контейнеры
   * Находясь в папке проекта, в которой находится docker-compose.yml (```cd products-service-application```)
   * ```docker compose up --build```
3. После успешной сборки появятся docker контейнеры
4. Для открытия сайта переходим по пути http://localhost:3000/
5. Сервер слушает запросы по пути http://localhost:8080/

### Дополнительная информация
Изначально в ElasticSearch нет документов. Чтобы их добавить необходимо в панели навигации перейти на страницу "Load from db to ElasticSearch" и заполнить фильтры для загрузки данных из базы в ElasticSearch.
Затем переходим на страницу "Search" и указываем ключевое слово для поиска(поиск производится по описанию, цвету, sku коду продукта и названию. Пример: "product", "starburst", "glimmer" или "red").
