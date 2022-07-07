import { Controller, Get, Query } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PokeService } from './poke.service';
import { MAX_CARD_OPTIONS, MAX_ID_SECOND_GEN } from './constants';
import { getRandomNumber, hasDuplicates } from '@/utils';

@Controller()
export class PokeController {
  constructor(private readonly pokeService: PokeService) {}

  @Get()
  findAll(@Query() query?: { limit?: number; offset?: number }) {
    return this.pokeService.findAll(query?.limit, query?.offset);
  }

  @Get('quiz')
  async generateQuiz() {
    const limit = 100;

    let randomOffset = getRandomNumber(MAX_ID_SECOND_GEN) - limit;
    randomOffset = randomOffset < 0 ? 0 : randomOffset;

    const pokemonList = await firstValueFrom(this.findAll({ limit, offset: randomOffset }));
    let randomPokemonIndices = [...Array(MAX_CARD_OPTIONS)].map(() => getRandomNumber(limit));

    while (hasDuplicates(randomPokemonIndices)) {
      randomPokemonIndices = randomPokemonIndices.map(() => getRandomNumber(limit));
    }

    return randomPokemonIndices.map((index) => {
      const pokemon = pokemonList.results[index];
      const pokemonId = pokemon.url.split('/pokemon/')[1].split('/')[0];

      return {
        id: pokemonId,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
      };
    });
  }
}
