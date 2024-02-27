import '../../styles/header/header.css';

const Header = () => {
  return (
    <header className='principal'>
        <div className='contenedores logo' >
          Logo
        </div>
        <div className='contenedores buscador'>
          <input type='search' id='buscador' placeholder=' Search'></input>
          <button id='botonBuscar'> 🔍 </button>
        </div>
        <div className='contenedores botones'>
          <button className='botonesSoloLetras'>Home</button>
          <button className='botonesSoloLetras'>Nosotros</button>
          <button className='botonesSoloLetras'>Afiliate</button>
          <button className='botonesConEstilo' id='botonConBorde'>Iniciar sesión</button>
          <button className='botonesConEstilo' id='botonSinBorde'>Registrarte</button>
        </div>
    </header>
  )
}

export default Header