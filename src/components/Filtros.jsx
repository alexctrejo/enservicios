import '../styles/filtros.css';
import React, { useState } from 'react';


const Filtros = () => {
    const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='filtros_principal'>
      <div className='subtitulo_filtro'>
        <p>Filtros</p>
      </div>
      <div className='filtros'>
        <div className='filtros'>
            <p className='filtros_etiqueta'>Abierto</p>
            <div className='abierto_ahora_input'>
                <input type='checkbox' name='Abierto ahora'></input>
                <label>Abierto ahora</label>
            </div>
        </div>
        <div className='filtros calificacion'>
            <p className='filtros_etiqueta'>Calificacion</p>
            <div className='calificacion_estrellas'>
                {renderStars()}
            </div>
        </div>
        <div className='filtros'>
            <p className='filtros_etiqueta'>Precio</p>
            <div>
                <input className='precio_input' type= 'number' placeholder='Min' ></input>
                <input className='precio_input' type= 'number' placeholder='Max'></input>
            </div>
        </div>
        <div className='filtros'>
            <p className='filtros_etiqueta'>Distancia</p>
            <div>
                <input type='radio' name='opcion'></input>
                <label>...km</label>
            </div>
            <div>
                <input type='radio' name='opcion'></input>
                <label>...km</label>
            </div>
            <div>
                <input type='radio' name='opcion'></input>
                <label>...km</label>
            </div>
            <div>
                <input type='radio' name='opcion'></input>
                <label>...km</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filtros
