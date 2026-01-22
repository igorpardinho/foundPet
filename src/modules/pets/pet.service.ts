import { NotFoundException } from "../../shared/errors/not-found.exception";
import { CreatePetInput, UpdatePetInput } from "./pet.dto";
import { PetRepository } from "./pet.repository";

export class PetService {
    constructor(private readonly petRepository = new PetRepository()) {}

   

    async findAllPaginated(page = 1, limit = 10) {
        return this.petRepository.findAllPaginated(page, limit);
    }

    async findById(id: string) {
        const pet = await this.petRepository.findById(id);
        if (!pet) {
            throw new NotFoundException("Pet");
        }
        return pet;
    }

    async update(id: string, data: UpdatePetInput) {
        const pet = await this.petRepository.update(id, data);
        if (!pet) {
            throw new NotFoundException("Pet");
        }
        return pet;
    }

    async delete(id: string) {
        await this.findById(id);
        await this.petRepository.delete(id);
    }
}
