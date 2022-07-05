import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokeController } from './poke.controller';
import { PokeService } from './poke.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://pokeapi.co/api/v2',
    }),
  ],
  controllers: [PokeController],
  providers: [PokeService],
})
export class PokeModule {}
