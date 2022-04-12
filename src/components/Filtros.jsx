import { useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className="campo">
          <label htmlFor="filtro">Filtrar Gastos</label>
          <select 
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            name="filtro" 
            id="filtro"
          >
            <option value='' selected> Todas las categorías </option>
            <option value="ahorro"> Ahorro </option>
            <option value="casa"> Hogar </option>
            <option value="comida"> Comida </option>
            <option value="gastos"> Gastos Varios </option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="suscripciones"> Suscripciones </option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros