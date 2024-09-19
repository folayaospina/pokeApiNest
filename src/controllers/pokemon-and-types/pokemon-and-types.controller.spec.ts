import { Test, TestingModule } from '@nestjs/testing';
import { PokemonAndTypesController } from './pokemon-and-types.controller';

describe('PokemonAndTypesController', () => {
  let controller: PokemonAndTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonAndTypesController],
    }).compile();

    controller = module.get<PokemonAndTypesController>(PokemonAndTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
