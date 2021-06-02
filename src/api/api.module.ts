import { TodoController } from './controllers/todo.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TodoController],
})
export class ApiModule {}
