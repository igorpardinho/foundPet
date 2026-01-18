import { UpdatePetInput } from "../pets/pet.dto";
import { CreateUserInput } from "./user.dto";
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
        return await this.userRepository.findById(id);
    }

    async findByEmail(email: string) {          
        return await this.userRepository.findByEmail(email);
    }

    async update(id: string, data: UpdatePetInput) {
        return await this.userRepository.update(id, data);
    }

    async delete(id: string) {
        return await this.userRepository.delete(id);
    }
}
