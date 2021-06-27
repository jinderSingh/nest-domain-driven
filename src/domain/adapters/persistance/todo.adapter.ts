import { TodoEntity } from './../../entities/todo.entity';

export abstract class TodoAdapter {
  static readonly INJECTION_KEY = 'TodoAdapter';

  constructor() {}
  abstract add(todo: TodoEntity): number;
  abstract update(id: number, todo: TodoEntity): number;
  abstract remove(id: number): void;
  abstract findAll(): TodoEntity[];
  abstract findById(id: number): TodoEntity | undefined;
}
