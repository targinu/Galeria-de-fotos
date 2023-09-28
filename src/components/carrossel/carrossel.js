import React, { useState, useEffect } from "react";
import "./carrossel.css";

function Carrossel({ imagens }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === imagens.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [imagens]);

  return (
    <div className="carrossel-container">
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem}
          alt={`Imagem ${index + 1}`}
          className={`carrossel-imagem ${currentIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default Carrossel;
