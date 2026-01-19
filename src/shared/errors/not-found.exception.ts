import { HttpError } from "./http-error";

export class NotFoundException extends HttpError {
    constructor(resource = "Resource") {
        super(`${resource} not found`, 404, "NOT_FOUND");
    }
}
