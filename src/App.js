
import React, { useState } from 'react';
import './App.css';
import { obtenerDatosApi } from './codigoApi';

function App() {
  //Variable para guardar el valor del input y set lo utilizo para actualizar el input
  const [inputValue, setInputValue] = useState('');
  //Variables para guardar el nombre del pokemon y la img
  const [pokemonData,setPokemonData] = useState(null);
  //Funcion de eventos
  const handleInputChange = (event) => {
    setInputValue(event.target.value); //para actualizar el valor del input
  };
  //esta funcion se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); //se utiliza para evitar que se envie de manera predeterminada
    console.log('Valor del input:', inputValue);

    // Llamar a obtenerDatosApi con el valor del input y la img
    obtenerDatosApi(inputValue,setPokemonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poke Api</h1>
        
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscando pokemon..."
        />
        <button type="submit" onClick={handleSubmit}>Buscar Poke</button>
        {pokemonData &&(
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.image} alt={pokemonData.name}></img>
          </div>
        )}
        <h3>Project: Kevin Valdivia</h3>
      </header>
    </div>
  );
}

export default App;
