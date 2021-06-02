import { UpdateTodoCommand } from './../../domain/commands/update-todo.command';
import { TodoDto } from './../dto/todo.dto';
import { TodoUseCase } from './../../domain/use-cases/todo.case';
import { AddTodoCommand } from './../../domain/commands/add-todo.command';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/api/v1/todos')
export class TodoController {
  constructor(private readonly todoUseCase: TodoUseCase) {}

  @Post()
  addTodo(@Body() addCommand: AddTodoCommand): void {
    this.todoUseCase.add(addCommand);
  }

  @Get('{id}')
  findById(@Param('id') id: number): TodoDto {
    return this.todoUseCase.findById(id);
  }

  @Get()
  findAll(): TodoDto[] {
    return this.todoUseCase
      .findAll()
      .map(({ id, completed, title, description }) => ({
        id,
        title,
        description,
        completed,
      }));
  }

  @Put('{id}')
  update(@Param('id') id: number, @Body() command: UpdateTodoCommand): void {
    this.todoUseCase.update(id, command);
  }

  @Delete('{id}')
  remove(@Param('id') id: number): void {
    this.todoUseCase.remove(id);
  }
}
