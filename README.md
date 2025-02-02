# Проект: Реалтайм Чат с Emoji Picker


Этот проект представляет собой реалтайм чат-приложение, разработанное с использованием React на фронтенде и Express на бэкенде. Чат поддерживает использование эмодзи благодаря библиотеке emoji-picker-react. Проект также включает настройку кода с помощью Prettier и использует CSS-модули для стилизации компонентов. Socket.io используется для реализации веб-сокетов и обеспечения обмена сообщениями в реальном времени.

Технологии
--------------------------  

```
Фронтенд

  • HTML
  • CSS Modules
  • React
  • React-router-dom
  • Socket.io-client
  • Emoji Picker React (emoji-picker-react)
  • Prettier

Бэкенд

  • Express
  • Nodemon
  • Socket.io
  • CORS
```

Демонстрация
--------------------------  


Проект размещен по следующей ссылке: [демо-странице](https://main--subtle-cajeta-89685f.netlify.app/).  

  
Установка и запуск на локальном компьютере  
--------------------------  


Требования  

  ```
    • Node.js (версии 14 или выше)
    • npm (версии 6 или выше) или yarn
  ```

Шаги установки
--------------------------  


1. Клонирование репозитория
   ```
   git clone https://github.com/Aliskhan7/chat-room
   cd chat-room
   ```
   
2. Установите зависимости для фронтенда и бэкенда:
   ```
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Запуск проекта
   
   В одном терминале запустите сервер:
   ```
   cd server
   npm run dev
   ```
   
   В другом терминале запустите клиент:
   ```
   cd client
   npm start
   ```
