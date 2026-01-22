import { Partial, Static, Type } from "@sinclair/typebox";

export const CreateOngDto = Type.Object({
    name: Type.String({ minLength: 3 }),
    cnpj: Type.String({
        minLength: 10,
    }),
    city: Type.String({ minLength: 2 }),
    phone: Type.String({ minLength: 9 }),
    email: Type.String({ format: "email" }),
    size: Type.String({ minLength: 5 }),
    pre_interview: Type.Boolean(),
});
export type CreateOngInput = Static<typeof CreateOngDto>;
export const UpdateOngDto = Partial(CreateOngDto);
export type UpdateOngInput = Static<typeof UpdateOngDto>;
