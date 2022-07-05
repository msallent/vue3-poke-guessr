import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Pokemon, PokemonList } from './interfaces/poke.interface';

@Injectable()
export class PokeService {
  constructor(private readonly httpService: HttpService) {}

  findAll() {
    return this.httpService.get<PokemonList>('/pokemon').pipe(map(({ data }) => data));
  }

  findOne(id: number) {
    return this.httpService.get<Pokemon>(`/pokemon/${id}`).pipe(map(({ data }) => data));
  }
}
