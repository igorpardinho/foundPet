import { Partial, Static, Type } from "@sinclair/typebox";

export const CreateUserDto = Type.Object({
    name: Type.String({ minLength: 3 }),
    email: Type.String({ format: "email" }),
    password: Type.String({ minLength: 8 }),
    age: Type.Number({ minimum: 2 }),
    phone: Type.String({ minLength: 11 }),
    address: Type.String(),
    city: Type.String(),
    state: Type.String(),
    contacts: Type.String(),
    first_pet: Type.Boolean(),
    pet_budget: Type.String(),
    photo: Type.String(),
    job: Type.String({ minLength: 5 }),
    routine: Type.String({ minLength: 4 }),
});

export type CreateUserInput = Static<typeof CreateUserDto>;
export const UpdateUserDto = Partial(CreateUserDto);
export type UpdateUserInput = Static<typeof UpdateUserDto>;
