import React, {useState} from "react";
export function obtenerDatosApi (pokeName, setPokemonData){//paso parametro para la busqueda y donde se cargar la img y name
    //url de api
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    //realizamos la soli utilizando fetch
    fetch(apiUrl)
        .then(response =>{
            if(!response.ok){
                throw new Error('Error en la soli: ${response.status}');
            }
            //pasar a json y retunr
            return response.json();
        })
        .then (data => {
            setPokemonData({
                name: data.name,
                image: data.sprites.front_default, //url para obtener la imagen
            })
            //prueba de datos
            console.log("datos",data);
            
            
        })
        .catch(error =>{
            //error 
            console.error('error al obtener la api',error);
        })
}
