import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokeController } from './poke/poke.controller';
import { PokeService } from './poke/poke.service';

@Module({
  imports: [HttpModule],
  controllers: [PokeController],
  providers: [PokeService],
})
export class AppModule {}
