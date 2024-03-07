// Константы
const FORM = document.getElementById('newsForm');
const NEWS_URL = '/data/news.json';

// Обработчик отправки формы
FORM.addEventListener('submit', e => {

  // Предотвращаем перезагрузку страницы
  e.preventDefault();

  // Собираем данные из формы  
  const data = {
    title: document.getElementById('titleInput').value,
    description: document.getElementById('descInput').value,
    text: document.getElementById('textInput').value,
    date: document.getElementById('dateInput').value, 
    id: document.getElementById('idInput').value,
    image: document.getElementById('imageInput').value
  };

  // Конвертируем данные в JSON
  const json = JSON.stringify(data);

  // Отправляем данные на сервер
  fetch(NEWS_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
  .then(response => {
    // Обработка ответа сервера
    console.log('Данные отправлены успешно');
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

});
