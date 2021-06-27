import { NestFactory } from '@nestjs/core';
import { PersistenceExceptionFilter } from './api/filters/exception/persistence-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new PersistenceExceptionFilter());
  await app.listen(3000);
}
bootstrap();
