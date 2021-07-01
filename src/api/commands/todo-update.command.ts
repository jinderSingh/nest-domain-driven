import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoUpdateCommand {
  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly completed: boolean;
}
