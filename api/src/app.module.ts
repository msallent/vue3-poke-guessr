import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokeModule } from './poke/poke.module';

@Module({
  imports: [ConfigModule.forRoot(), PokeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
