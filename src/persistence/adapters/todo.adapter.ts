import { Injectable } from '@nestjs/common';
import { TodoEntity } from './../../domain/entities/todo.entity';
import { TodoAdapter } from 'src/domain/adapters/persistance/todo.adapter';

export class TodoPersistanceAdapter extends TodoAdapter {
  private readonly todos: TodoEntity[] = [];

  add(todo: TodoEntity): number {
    const id = Date.now();
    this.todos.push({ ...todo, id, createdAt: Date.now() });
    return id;
  }

  update(id: number, todo: TodoEntity): number {
    const todoToUpdate = this.todos.findIndex((t) => t.id === id);

    if (!todoToUpdate) {
      throw new Error(`No todo found with id: ${id}`);
    }

    this.todos[todoToUpdate] = {
      ...this.todos[todoToUpdate],
      ...todo,
      updateAt: Date.now(),
    };

    return id;
  }

  remove(id: number): void {
    this.todos.filter((todo) => todo.id !== id);
  }

  findAll(): TodoEntity[] {
    return [...this.todos];
  }

  findById(id: number): TodoEntity | null {
    return this.todos.find((todo) => todo.id === id);
  }
}
