import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { types } from 'util';

@Injectable()
export class PokemonsService {

/**
 * Retorna varios pokemons de la API externa.
 * @param quantity El número de pokemons a retornar.
 * @returns Devuelve una promesa que se resuelve en un objeto que contiene los pokemons recuperados.
 */
  getMany(quantity: number) {
    console.group('---------------- PokemonsService - getMany ---------------');
    console.log(`quantity: ${quantity}`);
    let dataToSend = {
        results: [],
    };
    return callExternalAPI(
        'https://pokeapi.co/api/v2/',
        `pokemon?limit=${quantity}`,
    )
        .then((data) => {
            dataToSend.results = data.results;
            console.log('----------------------------------------------');
            console.groupEnd();
            return dataToSend;
        })
        .catch((error) => {
            console.group('Error calling the API POKEMONS');
            console.error(error);
        });
  }


/**
 * Obtiene los datos de un Pokémon según su ID (nombre o íd numerico).
 * 
 * @param id - El ID del Pokémon a obtener.
 * @returns Una promesa que se retorna con los detalles del Pokémon definido.
 */
  getOne(id: number | string) {
    console.group('---------------- PokemonsService - getOne ---------------');
    console.log(`id: ${id}`);
    let dataToSend = {
        name: '',
        types: [],
    };
    return callExternalAPI(
        'https://pokeapi.co/api/v2/',
        `pokemon/${id}`,
    )
        .then((data) => {
            dataToSend.name = data.name;
            dataToSend.types = data.types;
            console.log('----------------------------------------------');
            console.groupEnd();
            return dataToSend;
        })
        .catch((error) => {
            console.group('Error calling the API POKEMONS');
            console.error(error);
        });
  }

}
 const callExternalAPI = async (url: string , paramsUrl?: string) => {
    try {
      const response = await fetch(`${url}${paramsUrl}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Unable to fetch data from the API POKEMONS');
      }
    } catch (error) {
      console.group('Error calling the API POKEMONS');
      console.error(error);
      console.groupEnd();
    }
  };
  