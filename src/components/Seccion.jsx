import '../styles/seccion.css';

const Seccion = () => {
  return (
    <div className='seccion_intereses'>
      <div className='subtitulo'>
        <p>Podria interesarte</p>
      </div>
      <div className='servicios'>
        <div>
            <img className='imagenes' src='https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/08/taller-mecanico-2789939.jpg'></img>
            <p className='etiqueta'>Taller mecanico</p>
        </div>
        <div>
            <img className='imagenes' src='https://www.recetasnestlecam.com/sites/default/files/2023-08/platos-ingredientes-comida-mexicana.jpg'></img>
            <p className='etiqueta'>Comida mexicana</p>
        </div>
        <div>
            <img className='imagenes' src='https://www.lasbebidas.info/wp-content/uploads/2019/10/bebidas.jpg'></img>
            <p className='etiqueta'>Bebidas</p>
        </div>
      </div>
    </div>
  )
}

export default Seccion
