import { Controller, Get} from '@nestjs/common';
import { PokemonAndTypesService } from 'src/services/pokemon-and-types/pokemon-and-types.service';

@Controller('pokemonAndTypes')
export class PokemonAndTypesController {

    constructor(private readonly pokemonAndTypes: PokemonAndTypesService) {}

    @Get('')
    async getTypes()  {
        return await this.pokemonAndTypes.getManyTypes(1);
    }
}
