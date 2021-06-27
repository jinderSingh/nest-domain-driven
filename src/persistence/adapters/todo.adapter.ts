import { EntityNotFoundException } from '@domain/exceptions/entity-not-found.exception';
import { TodoEntity } from '@domain/entities/todo.entity';
import { TodoAdapter } from '@domain/adapters/persistance/todo.adapter';

export class TodoPersistanceAdapter extends TodoAdapter {
  private todos: TodoEntity[] = [];

  add(todo: TodoEntity): number {
    const id = Date.now();
    this.todos.push({ ...todo, id, createdAt: Date.now() });
    return id;
  }

  update(id: number, todo: TodoEntity): number {
    const todoToUpdateIndex = this.todos.findIndex((t) => +t.id === +id);
    const todoToUpdate = this.todos[todoToUpdateIndex];
    this.todos[todoToUpdateIndex] = {
      ...todoToUpdate,
      ...todo,
      id: todoToUpdate.id,
      updateAt: Date.now(),
    };

    return id;
  }

  remove(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  findAll(): TodoEntity[] {
    return this.todos || [];
  }

  findById(id: number): TodoEntity | undefined {
    const todo = this.todos.find((todo) => +todo.id === +id);

    if (!todo) {
      throw new EntityNotFoundException(`No todo found with id ${id}`);
    }

    return todo;
  }
}
