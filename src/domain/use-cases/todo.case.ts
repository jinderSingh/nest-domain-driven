import { TodoEntity } from './../entities/todo.entity';
import { UpdateTodoCommand } from './../commands/update-todo.command';
import { AddTodoCommand } from './../commands/add-todo.command';
import { Injectable } from '@nestjs/common';
import { TodoAdapter } from '../adapters/persistance/todo.adapter';

@Injectable()
export class TodoUseCase {
  constructor(private readonly persistanceAdapter: TodoAdapter) {}

  add(todo: AddTodoCommand): Promise<string> {
    return this.persistanceAdapter.add({
      ...todo,
      id: null,
    });
  }

  update(id: string, todo: UpdateTodoCommand): Promise<string> {
    return this.persistanceAdapter
      .findById(id)
      .then((todoToUpdate) =>
        this.persistanceAdapter.update(id, { ...todoToUpdate, ...todo }),
      );
  }

  remove(id: string): void {
    this.persistanceAdapter.remove(id);
  }

  findAll(): Promise<TodoEntity[]> {
    return this.persistanceAdapter.findAll();
  }

  findById(id: string): Promise<TodoEntity | undefined> {
    return this.persistanceAdapter.findById(id);
  }
}
