import { Pagination } from '../../interfaces/pagination.interfaces';
import { Furniture } from '../interface/furniture.intefaces';
import { FurnitureRepository } from '../repository/furniture.repository';

export class FurnitureService {
  private static instance: FurnitureService;
  private repository: FurnitureRepository;

  constructor() {
    this.repository = FurnitureRepository.getInstance();
  }

  public static getInstance(): FurnitureService {
    if (!FurnitureService.instance) {
      FurnitureService.instance = new FurnitureService();
    }
    return FurnitureService.instance;
  }

  getAllFurnitures(pagination: Pagination, sorting: string) {
    return this.repository.getAllFurnitures(pagination, sorting);
  }

  getAFurnitureById(id: string) {
    return this.repository.getAFurnitureById(id);
  }

  addAFurniture(furniture: Furniture) {
    return this.repository.addAFurniture(furniture);
  }

  modifyAFurnitureById(id: string, cost: number, stock: number) {
    return this.repository.modifyAFurnitureById(id, cost, stock);
  }
  deleteAFurnitureById(id: string) {
    return this.repository.deleteAFurnitureById(id);
  }
}
