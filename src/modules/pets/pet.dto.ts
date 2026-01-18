import { Static, Type } from "@sinclair/typebox";

export const CreatePetDto = Type.Object({
    name: Type.String({ minLength: 3 }),
    species: Type.String({ minLength: 3 }),
    photo: Type.Optional(Type.String()),
    age: Type.Integer({ minimum: 0 }),
    gender: Type.String(),
    weight: Type.Integer({ minimum: 1 }),
    behavior: Type.String(),
    vaccine: Type.String(),
    castration: Type.Boolean(),
    comorbidities: Type.String(),
    accompanied: Type.Boolean(),
    city: Type.String(),
});

export type CreatePetInput = Static<typeof CreatePetDto>;
export const UpdatePetDto = Type.Partial(CreatePetDto);
export type UpdatePetInput = Static<typeof UpdatePetDto>;
