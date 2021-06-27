import { PersistanceModule } from './persistence/persistance.module';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DomainModule.forRoot({ imports: [PersistanceModule] }),
    ApiModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
