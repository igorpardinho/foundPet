import Elysia from "elysia";
import { HttpError } from "../errors/http-error";

export const errorHandler = new Elysia().onError(({ error, set }) => {
    if (error instanceof HttpError) {
        set.status = error.status;
        return {
            message: error.message,
            code: error.status,
        };
    }
    set.status = 500;
    return {
        message: "Internal server error",
    };
});
