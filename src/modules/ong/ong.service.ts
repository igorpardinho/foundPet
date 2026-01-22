import { NotFoundException } from "../../shared/errors/not-found.exception";
import { CreatePetInput } from "../pets/pet.dto";
import { PetRepository } from "../pets/pet.repository";
import { CreateOngInput, UpdateOngInput } from "./ong.dto";
import { OngRepository } from "./ong.repository";

export class OngService {
    constructor(
        private readonly ongRepository = new OngRepository(),
        private readonly petRepository = new PetRepository(),
    ) {}

    async create(data: CreateOngInput) {
        const ong = await this.ongRepository.create(data);
        return ong;
    }

    async findAllPaginated(page = 1, limit = 10) {
        return await this.ongRepository.findAllPaginated(page, limit);
    }

    async findById(id: string) {
        const ong = await this.ongRepository.findById(id);
        if (!ong) {
            throw new NotFoundException("Ong");
        }
        return ong;
    }

    async update(id: string, data: UpdateOngInput) {
        const ong = await this.ongRepository.update(id, data);
        if (!ong) {
            throw new NotFoundException("Ong");
        }
        return ong;
    }

    async delete(id: string) {
        await this.ongRepository.findById(id);
        await this.ongRepository.delete(id);
    }

    async createPet(ongId: string, data: CreatePetInput) {
        const ong = await this.ongRepository.findById(ongId);
        if (!ong) throw new NotFoundException("Ong");
        return await this.petRepository.create({
            ...data,
            ongId,
        });
    }

    async findPetsForOng(id: string, page = 1, limit = 10) {
        const ong = await this.ongRepository.findById(id);
        if (!ong) throw new NotFoundException("Ong");

        return await this.ongRepository.findPetsForOng(id, page, limit);
    }
}
