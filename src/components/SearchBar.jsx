import React, { useState } from "react";

export default function SearchBar({onSearch}) {{/*La recibo como prop!*/}
  const [search, setSearch] = useState('')

  function onInputChange(evento) {
    setSearch(evento.target.value)
  }
  /*
  mi funcion que se guarda lo que escribo en el input
  mi funcion que dispara el evento onSearch con lo que guarde de mi input  
  */
  function onSubmit(e) {
    e.preventDefault();
    onSearch(search);{/*la ejecuto!*/}
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={onInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
