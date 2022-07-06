import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Pokemon, PokemonList } from './interfaces';

@Injectable()
export class PokeService {
  constructor(private readonly httpService: HttpService) {}

  findAll(limit = 20, offset = 0) {
    return this.httpService
      .get<PokemonList>(`/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(map(({ data }) => data));
  }

  findOne(id: number) {
    return this.httpService.get<Pokemon>(`/pokemon/${id}`).pipe(map(({ data }) => data));
  }
}
