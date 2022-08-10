import React from 'react'

function Filter() {
  return (
    <div>
      <select class='form-select' aria-label='Filtro de busqueda'>
        <option selected>Open this select menu</option>
        <option value='1'>Fecha de pedido Inicial</option>
        <option value='2'>Fecha de pedido Final</option>
        <option value='3'>Nombre de Cliente</option>
        <option value='4'>Artículos</option>
        <option value='5'>Zona</option>
      </select>
    </div>
  )
}

export default Filter
