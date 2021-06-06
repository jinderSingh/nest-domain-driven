import { PersistanceModule } from './persistence/persistance.module';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DomainModule.forRoot({ imports: [PersistanceModule] }), ApiModule],
})
export class AppModule {}
