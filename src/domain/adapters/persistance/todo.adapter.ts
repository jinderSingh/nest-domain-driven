import { Injectable } from '@nestjs/common';
import { TodoEntity } from './../../entities/todo.entity';

export abstract class TodoAdapter {
  abstract add(todo: TodoEntity): number;
  abstract update(id: number, todo: TodoEntity): number;
  abstract remove(id: number): void;
  abstract findAll(): TodoEntity[];
  abstract findById(id: number): TodoEntity | null;
}
