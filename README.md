# Todos

![image](https://raw.githubusercontent.com/ketrindan/todos/main/src/screen.png)

## **Описание**

Сервис _Todos_ - тренировочный проект на React + TS (только декстоп-версия)

### **Функционал**

- Добавление задач в список дел
- Фильтрация списка дел
- Удаление выполненных задач

### **Технологии и библиотеки**

- TypeScript
- React
- React Hooks (в качестве инструмента управления состоянием используются useContext + useReducer)
- библиотека компонентов MUI
- Jest

### **Ссылка на проект**

[Проект на GitHub Pages](https://ketrindan.github.io/todos/)

### **Инструкция по установке и сборке**

1. Клонировать репозиторий

```
git clone git@github.com:ketrindan/todos.git
```

2. Перейти в папку проекта

```
cd todos
```

3. Установить пакеты

```
npm install
```

`npm start` - запуск режима разработки

Чтобы открыть проект в браузере, перейдите на [http://localhost:3000](http://localhost:3000).

При сохранении изменений страница автоматически перезагружается.

`npm run build` - запуск сборки проекта, проект будет собран в папку `build`

`npm run deploy` - деплой проекта на Github Pages

`npm test` - запуск Jest
