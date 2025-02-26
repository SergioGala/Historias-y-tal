import React, { useState, useRef, useEffect } from 'react';
import './BooksGrid.css';

const BooksGrid = ({ items = [] }) => {
  const [activeBook, setActiveBook] = useState(null);
  const closeButtonRef = useRef(null);
  
  // Usar items por defecto si no se proporcionan
  const books = items.length > 0 ? items : [
    {
      title: 'Aventuras',
      description: 'Increíbles viajes llenos de desafíos y emociones. Explora mundos inexplorados y vive experiencias únicas.',
      image: 'mi-proyecto/src/assets/images/categories/Aventuras.jpg',
      color: '#FF6B6B',
      link: '/category/aventuras'
    },
    {
      title: 'Fantasía',
      description: 'Mundos mágicos de ensueño donde todo es posible. Dragones, hadas y poderes mágicos te esperan.',
      image: 'https://source.unsplash.com/featured/?fantasy',
      color: '#9D85B1',
      link: '/category/fantasia'
    },
    {
      title: 'Animales',
      description: 'Amigos del reino animal con historias sorprendentes. Descubre cómo viven y qué aventuras tienen.',
      image: 'https://source.unsplash.com/featured/?animals',
      color: '#6BAE72',
      link: '/category/animales'
    },
    {
      title: 'Espacio',
      description: 'Viajes a las estrellas y planetas. Explora galaxias lejanas y conoce los secretos del universo.',
      image: 'https://source.unsplash.com/featured/?space',
      color: '#4E7AC7',
      link: '/category/espacio'
    },
    {
      title: 'Piratas',
      description: 'Tesoros y aventuras marinas en los siete mares. Barcos, islas misteriosas y mapas del tesoro.',
      image: 'https://source.unsplash.com/featured/?pirates',
      color: '#8B4513',
      link: '/category/piratas'
    },
    {
      title: 'Princesas',
      description: 'Reinos encantados y magia en cada página. Castillos, príncipes y finales felices en cada historia.',
      image: 'https://source.unsplash.com/featured/?princess',
      color: '#FF69B4',
      link: '/category/princesas'
    },
    {
      title: 'Dinosaurios',
      description: 'Criaturas prehistóricas fascinantes que dominaron la Tierra. Aprende sobre estas enormes bestias.',
      image: 'https://source.unsplash.com/featured/?dinosaur',
      color: '#6EB257',
      link: '/category/dinosaurios'
    },
    {
      title: 'Misterios',
      description: 'Enigmas por resolver y secretos ocultos. Detectives, pistas y aventuras llenas de intriga.',
      image: 'https://source.unsplash.com/featured/?mystery',
      color: '#7851A9',
      link: '/category/misterios'
    }
  ];

  const handleBookClick = (index) => {
    if (activeBook === index) {
      // Si ya está abierto, navegar a la página
      const book = books[index];
      if (book.link) {
        if (book.link.startsWith('http')) {
          window.open(book.link, '_blank');
        } else {
          console.log('Navegando a:', book.link);
          // Si usas React Router: history.push(book.link);
        }
      }
    } else {
      // Si no está abierto, abrirlo
      setActiveBook(index);
    }
  };

  // Cerramos el libro con un enfoque directo
  const closeBook = () => {
    setActiveBook(null);
  };

  // Aseguramos que el evento onClick no se propague al libro
  const handleCloseButtonClick = (e) => {
    // Detener propagación inmediatamente
    e.stopPropagation();
    // Prevenir el comportamiento por defecto
    e.preventDefault();
    // Añadir un pequeño retraso para asegurar que el evento no se propague
    setTimeout(() => {
      closeBook();
    }, 10);
  };

  // Añadir la posibilidad de cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeBook !== null) {
        closeBook();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeBook]);

  // Asignar un id único a cada libro para facilitar la gestión de eventos
  const getBookId = (index) => `book-${index}`;

  // Renderizar un libro individual
  const renderBook = (book, index) => {
    const isOpen = activeBook === index;

    return (
      <div 
        key={index}
        id={getBookId(index)}
        className={`book ${isOpen ? 'book-open' : ''}`}
        onClick={() => handleBookClick(index)}
        style={{ '--book-color': book.color }}
      >
        {/* Portada del libro */}
        <div 
          className="book-cover"
          style={{
            backgroundColor: book.color
          }}
        >
          <div className="book-spine"></div>
          <div className="book-title">
            <h3>{book.title}</h3>
          </div>
          <div className="book-decoration">
            <div className="book-pattern"></div>
          </div>
        </div>
        
        {/* Interior del libro con texto en página izquierda e imagen en página derecha */}
        <div className="book-content">
          {/* Página izquierda con texto completo */}
          <div className="left-page">
            <div className="page-content">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <button className="read-button">
                Leer Historias
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
          
          {/* Página derecha con imagen */}
          <div className="right-page">
            <div 
              className="page-image-full"
              style={{ backgroundImage: `url(${book.image})` }}
            ></div>
          </div>
          
          {/* Botón de cierre mejorado */}
          <button 
  ref={closeButtonRef}
  type="button"
  className="close-book" 
  onClick={handleCloseButtonClick}
  aria-label="Cerrar libro"
>
  <span>×</span>
</button>
        </div>
      </div>
    );
  };

  return (
    <div className="books-container">
      <h2 className="books-title">Explora Nuestras Categorías</h2>
      <p className="books-subtitle">¡Haz clic en un libro para abrirlo!</p>
      
      <div className="books-grid">
        {books.map((book, index) => renderBook(book, index))}
      </div>
    </div>
  );
};

export default BooksGrid;