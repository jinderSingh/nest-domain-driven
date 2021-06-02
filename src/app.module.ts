import { PersistanceModule } from './persistence/persistance.module';
import { DomainModule } from './domain/domain.module';
import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiModule, DomainModule, PersistanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
