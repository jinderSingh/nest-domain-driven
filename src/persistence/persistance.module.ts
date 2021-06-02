import { TodoPersistanceAdapter } from './adapters/todo.adapter';
import { TodoAdapter } from 'src/domain/adapters/persistance/todo.adapter';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [{ provide: TodoAdapter, useClass: TodoPersistanceAdapter }],
  exports: [TodoAdapter],
})
export class PersistanceModule {}
