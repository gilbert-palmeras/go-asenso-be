import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../prismagraphql/user';


@ObjectType()
export class LoginData {
    @Field(() => String, { nullable: true })
    access_token?: string;
    @Field(() => Boolean, { nullable: false })
    status: boolean;
    @Field(() => String, { nullable: true })
    error?: string;
    @Field(() => User, { nullable: true })
    user?: object;
}
