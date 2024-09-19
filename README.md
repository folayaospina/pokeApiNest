# POKE API FELIPE OLAYA OSPINA
## Used Tools

- **NestJS**: A framework for building efficient, reliable, and scalable server-side applications in Node.js. It was used to structure the API and handle HTTP requests.

- **Fetch**: A native JavaScript API for making HTTP requests. It was used to make requests to the EXTERNAL API.

- **Vercel**: A cloud deployment platform for static applications and server functions. It was used to deploy the API in the cloud.

- **Visual Studio Code**: A source code editor. It was used to write the API code.
## PokemonAndTypes Service

This service is responsible for obtaining information about a specific Pokémon through the external PokeAPI.

### Method: getManyTypes

This method receives a parameter `id` which can be a number or a string. This `id` is used to make a request to the external API and retrieve information about the corresponding Pokémon.

The method returns a promise that resolves with an object containing the name of the Pokémon and a list of its types.

### Parameters

- `id`: A number or a string representing the ID of the Pokémon to search for.

### Return

A promise that resolves with an object containing the following fields:

- `name`: The name of the Pokémon.
- `types`: A list of objects, each representing a Pokémon type. Each type object contains the following fields:
  - `slot`: A number representing the position of the type in the Pokémon's type list.
  - `type`: An object containing information about the type.
  - `names`: A list of objects, each representing a name of the type in a specific language. Each name object contains the following fields:
    - `language`: An object containing information about the language of the name.
    - `name`: The name of the type in the specified language.

### Usage Example

```
localhost:3000/pokemonAndTypes?id=pikachu
localhost:3000/pokemonAndTypes?id=1
``` 

- The first URL will log the information of the Pokémon Pikachu, including its type (in Japanese and Spanish).
- The second URL will log the information of the Pokémon Bulbasaur, including its type (in Japanese and Spanish).

## Pokemons Service

This service is responsible for obtaining information about Pokémon through the external PokeAPI.

### Method: getMany

This method receives a parameter `quantity` which is a number. This number is used to make a request to the external API and obtain a list of Pokémon.

### Parameters

- `quantity`: A number representing the number of Pokémon to fetch.

### Return

A promise that resolves with an object containing the following fields:

- `results`: A list of objects, each representing a Pokémon. Each Pokémon object contains the following fields:
  - `name`: The name of the Pokémon.
  - `url`: The URL of the external API where more information about the Pokémon can be obtained.

### Usage Example
```
localhost:3000/pokemons/many?limit=100
``` 
This URL will log the information of the first 100 Pokémon.

### Method: getOne

This method receives a parameter `id` which can be a number or a string. This `id` is used to make a request to the external API and retrieve information about the corresponding Pokémon.

### Parameters

- `id`: A number or a string representing the ID of the Pokémon to search for.

### Return

A promise that resolves with an object containing the following fields:

- `name`: The name of the Pokémon.
- `types`: A list of objects, each representing a Pokémon type.

### Usage Example

```
localhost:3000/pokemons/one?id=pikachu
localhost:3000/pokemons/one?id=1
``` 

- The first URL will log the information of the Pokémon Pikachu.
- The second URL will log the information of the Pokémon Bulbasaur using its numeric ID.                                    