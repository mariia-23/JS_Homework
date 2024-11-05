/*Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена*/

async function createTodo(todoData) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoData)
        });

        if (response.status !== 200) {
            throw new Error(`Ошибка: статус ${response.status}`);
        }

        const responseData = await response.json();

        for (const key in todoData) {
            if (todoData[key] !== responseData[key]) {
                throw new Error(`Несоответствие данных по ключу "${key}": отправлено ${todoData[key]}, получено ${responseData[key]}`);
            }
        }

        return responseData;
    } catch (error) {
        console.error("Произошла ошибка:", error.message);
    } finally {
        console.log("Работа функции завершена");
    }
}

const todo = {
    title: "New Task",
    completed: false,
    userId: 1
};

createTodo(todo).then(response => {
    if (response) {
        console.log("Созданное туду:", response);
    }
});