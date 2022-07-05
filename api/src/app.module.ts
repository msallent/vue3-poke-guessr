import { Module } from '@nestjs/common';
import { PokeModule } from './poke/poke.module';

@Module({
  imports: [PokeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
