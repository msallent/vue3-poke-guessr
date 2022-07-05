import { Test, TestingModule } from '@nestjs/testing';
import { PokeController } from './poke.controller';
import { PokeService } from './poke.service';

describe('PokeController', () => {
  let pokeController: PokeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PokeController],
      providers: [PokeService],
    }).compile();

    pokeController = app.get<PokeController>(PokeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pokeController.findAll()).toBe('Hello World!');
    });
  });
});
