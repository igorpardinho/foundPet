import { NotFoundException } from "../../shared/errors/not-found.exception";
import { CreateUserInput, UpdateUserInput } from "./user.dto";
import { UserRepository } from "./user.repository";

export class UserService {
    constructor(private readonly userRepository = new UserRepository()) {}

    async create(data: CreateUserInput) {
        return await this.userRepository.create(data);
    }

    async findAllPaginated(page = 1, limit = 10) {
        return await this.userRepository.findAllPaginated(page, limit);
    }

    async findById(id: string) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundException("User");
        }
        return user;
    }

    async findByEmail(email: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new NotFoundException("User");
        }
        return user;
    }

    async update(id: string, data: UpdateUserInput) {
        const user = await this.userRepository.update(id, data);
        if (!user) {
            throw new NotFoundException("User");
        }
        return user;
    }

    async delete(id: string) {
        await this.findById(id);
        await this.userRepository.delete(id);
    }
}
