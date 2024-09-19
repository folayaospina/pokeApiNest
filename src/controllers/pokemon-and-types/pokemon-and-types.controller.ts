import { Controller, Get, Query} from '@nestjs/common';
import { PokemonAndTypesService } from 'src/services/pokemon-and-types/pokemon-and-types.service';

@Controller('pokemonAndTypes')
export class PokemonAndTypesController {

    constructor(private readonly pokemonAndTypes: PokemonAndTypesService) {}

    @Get('')
    async getTypes(@Query('id') id: number | string) {
        return await this.pokemonAndTypes.getManyTypes(id);
    }
}
