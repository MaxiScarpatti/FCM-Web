import React, { useState } from 'react';
import newsImage1 from '../noticia1.jpeg';
import newsImage2 from '../noticia2.jpeg';
import newsImage3 from '../noticia3.jpeg';

function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      id: 1,
      title: 'Arrancá el CPRO Enduro 2025',
      imageUrl: newsImage1,
      description: 'Primera fecha en Cosquín'
    },
    {
      id: 2,
      title: 'Vuelta al Cajón por relevo',
      imageUrl: newsImage2,
      description: '15 y 16 de febrero en Capilla del Monte'
    },
    {
      id: 3,
      title: 'MX Nocturno Final',
      imageUrl: newsImage3,
      description: 'Final del MX Nocturno en Laboulaye'
    }
  ];

  const openNews = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const closeNews = () => {
    setSelectedNews(null);
  };

  return (
    <section className="news-section">
      <h2>Novedades</h2>
      <div className="news-grid">
        {news.map((item) => (
          <div
            key={item.id}
            className="news-card"
            onClick={() => openNews(item)}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="news-image"
            />
            <h3 className="news-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="news-modal" onClick={closeNews}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedNews.imageUrl} 
              alt={selectedNews.title} 
              className="modal-image"
            />
            <h3 className="modal-title">{selectedNews.title}</h3>
            <p className="modal-description">{selectedNews.description}</p>
            <button className="close-button" onClick={closeNews}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewsSection;