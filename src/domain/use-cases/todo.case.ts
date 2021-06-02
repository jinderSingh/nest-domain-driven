import { TodoEntity } from './../entities/todo.entity';
import { UpdateTodoCommand } from './../commands/update-todo.command';
import { AddTodoCommand } from './../commands/add-todo.command';
import { Injectable } from '@nestjs/common';
import { TodoAdapter } from '../adapters/persistance/todo.adapter';

@Injectable()
export class TodoUseCase {
  constructor(private readonly persistanceAdapter: TodoAdapter) {}

  add(todo: AddTodoCommand): void {
    this.persistanceAdapter.add({
      ...todo,
      id: Date.now(),
      createdAt: null,
      updateAt: null,
    });
  }

  update(id: number, todo: UpdateTodoCommand): void {
    // TODO @Singh validate if todo is already completed
    const todoToUpdate = this.persistanceAdapter.findById(id);

    if (!todoToUpdate) {
      throw new Error(`No todo found with id: ${id}`);
    }

    this.persistanceAdapter.update(id, { ...todoToUpdate, ...todo });
  }

  remove(id: number): void {
    this.persistanceAdapter.remove(id);
  }

  findAll(): TodoEntity[] {
    return this.persistanceAdapter.findAll();
  }

  findById(id: number): TodoEntity | null {
    return this.persistanceAdapter.findById(id);
  }
}
