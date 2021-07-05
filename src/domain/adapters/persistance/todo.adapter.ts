import { TodoEntity } from './../../entities/todo.entity';

export abstract class TodoAdapter {
  static readonly INJECTION_KEY = 'TodoAdapter';

  constructor() {}
  abstract add(todo: TodoEntity): Promise<string>;
  abstract update(id: string, todo: TodoEntity): Promise<string>;
  abstract remove(id: string): Promise<boolean>;
  abstract findAll(): Promise<TodoEntity[]>;
  abstract findById(id: string): Promise<TodoEntity | undefined>;
}
