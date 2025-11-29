import { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {

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

  return <>
  <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images[0].url} className="d-block w-100" alt={images[0].title}></img>
    </div>
    <div className="carousel-item">
      <img src={images[1].url} className="d-block w-100" alt={images[1].title}></img>
    </div>
    <div className="carousel-item">
      <img src={images[2].url} className="d-block w-100" alt={images[2].title}></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>


};

export default Gallery;