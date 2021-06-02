import { TodoUseCase } from './use-cases/todo.case';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [TodoUseCase],
  exports: [TodoUseCase],
})
export class DomainModule {}
