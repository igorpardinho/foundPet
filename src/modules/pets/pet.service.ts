import { CreatePetInput, UpdatePetInput } from "./pet.dto";
import { PetRepository } from "./pet.repository";

export class PetService {
    constructor(private readonly petRepository = new PetRepository()) {}

    async create(data: CreatePetInput) {
        if (data.age < 0) throw new Error("Idade inválida");
        if (data.weight < 0) throw new Error("Peso inválido");

        return await this.petRepository.create(data);
    }

    async findAll(page = 1, limit = 10) {
        if (page < 0) page = 1;
        if (limit < 0) limit = 10;
        return this.petRepository.findAllPaginated(page, limit);
    }

    async findById(id: string) {
        return await this.petRepository.findById(id);
    }

    async update(id: string, data: UpdatePetInput) {
        return await this.petRepository.update(id, data);
    }

    async delete(id: string) {
        await this.petRepository.delete(id);
    }
}
