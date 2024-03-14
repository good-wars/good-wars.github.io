window.onload = function () {
    document.body.classList.add('animation_hiding');
    window.setTimeout(function () {
      document.body.classList.add('animation');
      document.body.classList.remove('animation_hiding');
    }, 600);
  }

// Получить новости с сервера
async function getNews() {
    const response = await fetch('https://github.com/good-wars/data/tree/main/news.json');
    const news = await response.json();
    return news;
}

// Отобразить новости
async function showNews() {
    try {
        const news = await getNews();

        let html = '';

        html += `<div class="news-text">`;

        news.forEach(item => {
            html += `
        <div class="news-item">
            <div class="news">
                <div class="news-text">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <a href="#iw-modal${item.id}" class="btn iw-modal-btn">Читать далее</a> 
                    <h3>Дата: <code>${item.date}</code></h3>
                </div>
            </div>
        </div>

        <!---Разметка для модального окна---->	
        <div id="iw-modal${item.id}" class="iw-modal">
          <div class="iw-modal-wrapper">
            <div class="iw-CSS-modal-inner">
               <div class="iw-modal-header">
                  <h3 class="iw-modal-title">${item.title}</h3>
                  <a href="#close" title="Закрыть" class="iw-close">&times;</a>
               </div>
               <div class="iw-modal-text">    
                 <p>${item.text}</p>
                 <img src="https://raw.githubusercontent.com/good-wars/data/main/assets/${item.image}" alt="Изображение новости">
               </div>
        </div>
      </div>	
      </div>
      <!---end.Разметка для модального окна---->
      `;
        });

        html += `</div>`;

        document.getElementById('news-feed').innerHTML = html;

    } catch (error) {
        html += `<h2>Произошла ошибка при получении новостей: ${error}</h2>`;
        console.error('Произошла ошибка при получении новостей', error);
    }
}

showNews();