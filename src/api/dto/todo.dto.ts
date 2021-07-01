import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly completed: boolean;
}
