import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { callExternalAPI } from 'src/utils/externalApiUtil';
import { json } from 'stream/consumers';

@Injectable()
export class PokemonAndTypesService {
  /**
   * Obtiene los datos de un Pokémon según su ID (nombre o íd numerico).
   *
   * @param id - El ID del Pokémon a obtener.
   * @returns Una promesa que se retorna con los detalles del Pokémon definido.
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

        const dataToTypes = data.types.map(async (type) => {
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
              typesList.push(elementToPush);

              return typesList;
            })
            .then((data) => {
              return data;
            });
        });

        return Promise.all(dataToTypes).then((data) => {
            log(data, 'data');
          dataToSend.types = data;
          return dataToSend;
          
        });

      },
    );
  }
  //         const urls = data.types.map((type) => type.type.url);

  //         console.log(urls.length, 'urls');

  //         await Promise.all(
  //           urls.map(async (url) => {
  //             let type = {
  //               slot: '',
  //               type: json,
  //               names: [],
  //             };
  //             const typeData = (await fetch(url)).json();
  //             typeData.then((data) => {
  //               data.names.forEach((element) => {
  //                 if (
  //                   element.language.name === 'es' ||
  //                   element.language.name === 'ja'
  //                 ) {
  //                   type.names.push(element);
  //                 }
  //               });
  //               console.log(data, 'data');

  //               type.type = data.type;
  //               type.slot = data.slot;
  //               typesList.push(type);
  //             });

  //             return typesList;
  //           }),
  //         ).then((data) => {
  //           console.log(data, 'despues de todo');
  //           return typesList;
  //         });
  //       },
  //     );
  //   }
}

//    await data.types.forEach((data,index) => {
//         let types = { slot: '', type: json};
//         types.slot = data.slot;
//         types.type = data.type;

//     });

//     await Promise.all(
//       urls.map(async (url) => {
//         const typeData = await fetch(url);
//         typeData.json().then((data) => {
//             let namesList = [];
//             console.log(namesList,"antes");
//           data.names.forEach((element) => {

//               if (
//                   element.language.name === 'es' ||
//                   element.language.name === 'ja'
//                 ) {
//                 console.log(element);
//               namesList.push(element);
//             }
//           });
//           types.names.push(namesList);

//          console.log(namesList,"despues");

//         });
//         typesList.push(types);
//       }),
//     );

//     dataToSend.types.push(typesList);
//     return dataToSend;
//   },
// );
