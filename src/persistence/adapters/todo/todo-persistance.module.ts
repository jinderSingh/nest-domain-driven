import { TodoSchema } from './../../schemas/todo.schema';
import { TodoPersistanceAdapter } from './todo.adapter';
import { TodoAdapter } from '@domain/adapters/persistance/todo.adapter';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

const providers = [
  { provide: TodoAdapter.INJECTION_KEY, useClass: TodoPersistanceAdapter },
];

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  providers,
  exports: [...providers],
})
export class TodoPersistanceModule {}
