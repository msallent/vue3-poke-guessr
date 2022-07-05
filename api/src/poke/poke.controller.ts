import { Controller, Get, Param } from '@nestjs/common';
import { PokeService } from './poke.service';

@Controller()
export class PokeController {
  constructor(private readonly pokeService: PokeService) {}

  @Get()
  findAll() {
    return this.pokeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pokeService.findOne(id);
  }
}
