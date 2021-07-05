import { Todo } from './todo.model';
import { TodoEntity } from '@domain/entities/todo.entity';
import { TodoAdapter } from '@domain/adapters/persistance/todo.adapter';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class TodoPersistanceAdapter implements TodoAdapter {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  add(todo: TodoEntity): Promise<string> {
    return this.todoModel.create(todo).then((res) => res.id);
  }

  update(id: string, todo: TodoEntity): Promise<string> {
    return this.todoModel.findByIdAndUpdate(id, todo).then((res) => res.id);
  }

  async remove(id: string): Promise<boolean> {
    try {
      const removed = await this.todoModel.findByIdAndRemove(id);
      return true;
    } catch (e) {
      console.log(`Error occured while removing element: `, e);
      return false;
    }
  }

  findAll(): Promise<TodoEntity[]> {
    return this.todoModel
      .find({})
      .then((res) => res.map((todo) => this.mapToEntity(todo)));
  }

  findById(id: string): Promise<TodoEntity | undefined> {
    return this.todoModel.findById(id).then(this.mapToEntity.bind(this));
  }

  private mapToEntity({
    id,
    title,
    description,
    createdAt,
    updatedAt,
    completed,
  }: Todo): TodoEntity {
    return { id, title, description, completed, createdAt, updatedAt };
  }
}
