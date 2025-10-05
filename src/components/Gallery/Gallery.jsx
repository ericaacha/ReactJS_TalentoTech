import { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=800&h=600&fit=crop",
      title: "Comida Premium"
    },
    {
      url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&h=600&fit=crop",
      title: "Juguetes"
    },
    {
      url: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&h=600&fit=crop",
      title: "Camas"
    },
    {
      url: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=800&h=600&fit=crop",
      title: "Rascadores"
    },
    {
      url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=800&h=600&fit=crop",
      title: "Accesorios"
    },
    {
      url: "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800&h=600&fit=crop",
      title: "Collares"
    },
    {
      url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=600&fit=crop",
      title: "Transportadoras"
    },
    {
      url: "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=800&h=600&fit=crop",
      title: "Platos"
    },
    {
      url: "https://images.unsplash.com/photo-1516750484197-d11accepting?w=800&h=600&fit=crop",
      title: "Arena"
    }
  ];

  const itemsPerSlide = 3;
  const maxIndex = Math.max(0, images.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calcular el desplazamiento
  const translateValue = currentIndex * (100 / itemsPerSlide + (20 / itemsPerSlide));

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Productos para tu Gato</h2>
      
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${translateValue}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.title}
              className={styles.carouselImage}
            />
          ))}
        </div>
      </div>

      <button 
        className={`${styles.carouselButton} ${styles.prevButton}`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Anterior"
      >
        ‹
      </button>

      <button 
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        aria-label="Siguiente"
      >
        ›
      </button>

      <div className={styles.carouselIndicators}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.indicatorActive : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

// import styles from './Gallery.module.css'


// const Gallery = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=500&h=500&fit=crop", // Comida para gatos
//     "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500&h=500&fit=crop", // Gato con juguete
//     "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&h=500&fit=crop", // Cama para gatos
//     "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=500&h=500&fit=crop", // Rascador
//     "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=500&h=500&fit=crop", // Juguetes
//     "https://images.unsplash.com/photo-1516750484197-d11accepting?w=500&h=500&fit=crop", // Arena para gatos
//     "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=500&h=500&fit=crop", // Collar
//     "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&h=500&fit=crop", // Transportadora
//     "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=500&h=500&fit=crop", // Platos de comida
//   ];

//   return (
//     <>
//       <section>
//         {images.map((src, index) => (
//           <img key={index} src={src} alt={`Producto para gatos ${index + 1}`} />
//         ))}
//       </section>
//     </>
//   );
// };

// export default Gallery;