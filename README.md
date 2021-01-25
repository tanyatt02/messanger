Проект замусоренный, так как писался в процессе обучения постепенно.
Сначала надо запустить из serverMongo/load/user.js,message.js, chat.ов
это загрузка в mongoDb данных из server/db соответстввующих json щи

Затем сервер npm run serve на порту 3335
npm run dev на порту 3334

Сейчас работает server/controllers/chat1,(используется в server/index.js,
а хотелось бы чтобы server/controllers/chat.js,
но там не получается получить данные из async findMessages в ф-ле server/controllers/message.js

В программе сначала выбрать пользователя (кнопка CHOUSE USER, затем из списка),
потом chat из списка.
Добавление сообщения по кнопке SEND или Enter
