import { NotFoundException } from "../../shared/errors/not-found.exception";
import { CreateOngInput, UpdateOngInput } from "./ong.dto";
import { OngRepository } from "./ong.repository";

export class OngService {
    constructor(private readonly ongRepository = new OngRepository()) {}

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
}
