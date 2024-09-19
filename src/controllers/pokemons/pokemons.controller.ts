import { PokemonsService } from './../../services/pokemons/pokemons.service';
import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';

/**
 * Controlador para los Pokemons.
 */
@Controller('pokemons')
export class PokemonsController {
    constructor(private readonly pokemonsService : PokemonsService) {}
    /**
     * GETALLPOKEMONS se encarga de obtener todos los Pokemons.
     * @returns 'Esta acción devuelve todos los Pokemons'
     */
    @Get('many')
    @HttpCode(HttpStatus.ACCEPTED)
    getMany(@Query('quantity') quantity = 100 ) {
      return  this.pokemonsService.getMany(quantity);
    }

    /**
     * GETONEPOKEMON se encarga de obtener un Pokemon.
     * @returns 'Esta acción devuelve un Pokemon'
     */
    @Get('one')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Query('id') id: number | string) {
      return this.pokemonsService.getOne(id);
    }
}
