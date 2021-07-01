import { TodoUpdateCommand } from './../commands/todo-update.command';
import { TodoCreateCommand } from './../commands/todo-create.command';
import { TodoDto } from './../dto/todo.dto';
import { TodoUseCase } from '@domain/use-cases/todo.case';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';

@Resolver((of) => TodoDto)
export class TodoResolver {
  constructor(private readonly todoUseCase: TodoUseCase) {}

  @Query(() => TodoDto, { name: 'todo' })
  async findById(@Args('id') id: string) {
    return this.todoUseCase.findById(id);
  }

  @Query(() => [TodoDto], { name: 'todos' })
  async findAll() {
    return this.todoUseCase.findAll();
  }

  @Mutation(() => String)
  async add(@Args('createCommand') createCommand: TodoCreateCommand) {
    return this.todoUseCase.add(createCommand);
  }

  @Mutation(() => String)
  async update(
    @Args('id') id: string,
    @Args('updateCommand') updateCommand: TodoUpdateCommand,
  ) {
    return this.todoUseCase.update(id, updateCommand);
  }

  @Mutation(() => Boolean)
  async remove(@Args('id') id: string) {
    this.todoUseCase.remove(id);
  }
}
