import { TodoPersistanceAdapter } from './adapters/todo.adapter';
import { TodoAdapter } from '../domain/adapters/persistance/todo.adapter';
import { Module } from '@nestjs/common';

const providers = [
  { provide: TodoAdapter.INJECTION_KEY, useClass: TodoPersistanceAdapter },
];

@Module({
  providers,
  exports: [...providers],
})
export class PersistanceModule {}
