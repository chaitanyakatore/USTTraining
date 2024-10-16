import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  create(menuData: Partial<Menu>): Promise<Menu> {
    const menu = this.menuRepository.create(menuData);
    return this.menuRepository.save(menu);
  }
}
