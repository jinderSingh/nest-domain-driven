import { TodoResolver } from './resolvers/todo.resolver';
import { TodoController } from './controllers/todo.controller';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  controllers: [TodoController],
  imports: [GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' })],
  providers: [TodoResolver],
  exports: [GraphQLModule],
})
export class ApiModule {}
