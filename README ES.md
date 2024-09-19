# POKE API FELIPE OLAYA OSPINA

## Herramientas utilizadas

Para la construcción de esta API, se utilizaron las siguientes herramientas:

- **NestJS**: Un marco de trabajo para construir aplicaciones de servidor eficientes, confiables y escalables en Node.js. Se utilizó para estructurar la API y manejar las solicitudes HTTP.

- **Fetch**: Una API nativa de JavaScript para hacer solicitudes HTTP. Se utilizó para hacer las solicitudes a la API EXTERNA.

- **Vercel**: Una plataforma de despliegue en la nube para aplicaciones estáticas y funciones de servidor. Se utilizó para desplegar la API en la nube.

- **Visual Studio Code**: Un editor de código fuente . Se utilizó para escribir el código de la API.

## Servicio PokemonAndTypes

Este servicio se encarga de obtener información de un Pokémon específico a través de la API externa PokeAPI.

### Método: getManyTypes

Este método recibe un parámetro id que puede ser un número o una cadena de texto. Este id se utiliza para hacer una solicitud a la API externa y obtener información sobre el Pokémon correspondiente.

El método devuelve una promesa que se resuelve con un objeto que contiene el nombre del Pokémon y una lista de sus tipos.

### Parámetros

- id: Un número o una cadena de texto que representa el ID del Pokémon a buscar.

### Retorno

Una promesa que se resuelve con un objeto que contiene los siguientes campos:

- name: El nombre del Pokémon.
- types: Una lista de objetos, cada uno representando un tipo de Pokémon. Cada objeto de tipo contiene los siguientes campos:
  - slot: Un número que representa la posición del tipo en la lista de tipos del Pokémon.
  - type: Un objeto que contiene información sobre el tipo.
  - names: Una lista de objetos, cada uno representando un nombre del tipo en un idioma específico. Cada objeto de nombre contiene los siguientes campos:
    - language: Un objeto que contiene información sobre el idioma del nombre.
    - name: El nombre del tipo en el idioma especificado.

### Ejemplo de uso

```
localhost:3000/pokemonAndTypes?id=pikachu
localhost:3000/pokemonAndTypes?id=1
```

- Este código imprimirá en la consola la información del primer Pokémon Pikachu, incluyendo su tipo9 (en japones y español)
- Este código imprimirá en la consola la información del segundo Pokémon Bulbasor, incluyendo su tipo (en japones y español)

## Servicio Pokemons

Este servicio se encarga de obtener información de los Pokémon a través de la API externa PokeAPI.

### Método: getMany

Este método recibe un parámetro quantity que es un número. Este número se utiliza para hacer una solicitud a la API externa y obtener una lista de Pokémon.

### Parámetros

- quantity: Un número que representa la cantidad de Pokémon a buscar.

### Retorno

Una promesa que se resuelve con un objeto que contiene los siguientes campos:

- results: Una lista de objetos, cada uno representando un Pokémon. Cada objeto de Pokémon contiene los siguientes campos:
  - name: El nombre del Pokémon.
  - url: La URL de la API externa donde se puede obtener más información sobre el Pokémon.

### Ejemplo de uso

```
localhost:3000/pokemons/many?limit=100
```

Esta url imprimirá en la consola la información de los primeros 100 Pokémon.

### Método: getOne

Este método recibe un parámetro id que puede ser un número o una cadena de texto. Este id se utiliza para hacer una solicitud a la API externa y obtener información sobre el Pokémon correspondiente.

### Parámetros

- id: Un número o una cadena de texto que representa el ID del Pokémon a buscar.

### Retorno

Una promesa que se resuelve con un objeto que contiene los siguientes campos:

- name: El nombre del Pokémon.
- types: Una lista de objetos, cada uno representando un tipo de Pokémon.

### Ejemplo de uso

```
localhost:3000/pokemons/one?id=pikachu
localhost:3000/pokemons/one?id=1
```

- La primera url imprimirá en la consola la información del Pokémon Pikachu.

- La segunda url imprimirá en la consola la información del Pokémon Bulbasor usando su id numerico.
