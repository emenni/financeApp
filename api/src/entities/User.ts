import { Collection, Entity, Enum, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Authorized, Field, ObjectType } from "type-graphql";
import { v4 } from "uuid";


export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}

@ObjectType()
@Entity()
export class User {

    constructor(values?: Partial<User>) {
        if (values) {
            Object.assign(this, values);
        }
    }

    @PrimaryKey()
    @Field()
    id: string = v4();

    @Field()
    @Property()
    name!: string;

}