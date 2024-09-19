import { Test, TestingModule } from '@nestjs/testing';
import { PokemonAndTypesService } from './pokemon-and-types.service';

describe('PokemonAndTypesService', () => {
  let service: PokemonAndTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonAndTypesService],
    }).compile();

    service = module.get<PokemonAndTypesService>(PokemonAndTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
