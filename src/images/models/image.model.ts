import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Image {
  @Field(type => ID)
  id: string;

  @Field(type => Int)
  width: number;

  @Field(type => Int)
  height: number;

  @Field()
  description: string;
}
