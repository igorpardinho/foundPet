import { t } from "elysia";

export const FindByEmailQuery = t.Object({
    email: t.String({ format: "email" }),
});
