import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './entity/menu.entity';

@Controller('menus') // Define the base route for this controller
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Post()
  create(@Body() menuData: Partial<Menu>): Promise<Menu> {
    return this.menuService.create(menuData);
  }
}
