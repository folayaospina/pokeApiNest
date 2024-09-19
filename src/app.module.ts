import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsController } from './controllers/pokemons/pokemons.controller';
import { PokemonAndTypesController } from './controllers/pokemon-and-types/pokemon-and-types.controller';
import { PokemonsService } from './services/pokemons/pokemons.service';
import { PokemonAndTypesService } from './services/pokemon-and-types/pokemon-and-types.service';

@Module({
  imports: [],
  controllers: [AppController, PokemonsController, PokemonAndTypesController],
  providers: [AppService, PokemonsService, PokemonAndTypesService],
})
export class AppModule {}
