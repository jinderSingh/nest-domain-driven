import { UpdateTodoCommand } from '@domain/commands/update-todo.command';
import { TodoDto } from './../dto/todo.dto';
import { TodoUseCase } from '@domain/use-cases/todo.case';
import { AddTodoCommand } from '@domain/commands/add-todo.command';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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

  @Get(':id')
  findById(@Param('id') id: string): Promise<TodoDto | undefined> {
    return this.todoUseCase.findById(id);
  }

  @Get()
  findAll(): Promise<TodoDto[]> {
    return this.todoUseCase.findAll().then((res) =>
      res.map(({ id, completed, title, description }) => ({
        id,
        title,
        description,
        completed,
      })),
    );
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() command: UpdateTodoCommand): void {
    this.todoUseCase.update(id, command);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    this.todoUseCase.remove(id);
  }
}
