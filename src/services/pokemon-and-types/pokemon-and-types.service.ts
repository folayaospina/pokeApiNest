import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { json } from 'stream/consumers';

@Injectable()
export class PokemonAndTypesService {
  /**
   * Obtiene los datos de un Pokémon según su ID (nombre o íd numerico).
   *
   * @param id - El ID del Pokémon a obtener.
   * @returns Una promesa que se retorna con los detalles del Pokémon definido.1
   */
  getManyTypes(id: number | string) {
    console.group(
      '---------------- PokemonsService - getManyTypes ---------------',
    );
    console.log(`id: ${id}`);
    let listaDeTipos = [];
    return callExternalAPI('https://pokeapi.co/api/v2/', `pokemon/${id}`).then(
      async (data) => {
        let dataToSend = {
          name: '',
          types: [],
        };
        dataToSend.name = data.name;
        let typesList = [];
        const length = data.types.map((type) => type.type.url).length;
  
        const dataToTypes = data.types.map(async (type, index) => {
          let elementToPush = { slot: '', type: '', names: [] };
  
          elementToPush.type = type.type;
          elementToPush.slot = type.slot;
  
          return await fetch(type.type.url)
            .then((response) => response.json())
            .then((data) => {
              let namesList = [];
              data.names.forEach((element) => {
                if (
                  element.language.name === 'es' ||
                  element.language.name === 'ja'
                ) {
                  namesList.push(element);
                }
              });
              elementToPush.names = namesList;
              return elementToPush;
            })
            .then((data) => {
              return data;
            });
        });
  
        return Promise.all(dataToTypes).then((data) => {
          dataToSend.types = data;
          return dataToSend;
        });
      },
    );
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
