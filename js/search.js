// Элементы
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('search-results');

// Загрузка данных
async function loadNews() {
  const response = await fetch('/data/news.json');
  return await response.json();
}

// Поиск 
async function search(query) {
  const news = await loadNews();
  
  const filtered = news.filter(n => {
    return n.title.includes(query);
  });

  let html = '';
  filtered.forEach(n => {
    html += `<a href="#iw-modal${n.id}" class="btn iw-modal-btn">${n.title} (Открыть)</a>`; 
  });

  results.innerHTML = html;
}

// Обработка формы
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const query = input.value;
  if (!query) return;

  search(query);
});
