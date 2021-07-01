import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoCreateCommand {
  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly completed: boolean;
}
