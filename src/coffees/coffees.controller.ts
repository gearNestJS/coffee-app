import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { UCoffee } from './entities/ucoffee.entity';
import { CoffeesService } from './providers/coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getAllCoffees(@Query() pagination): Coffee[] {
    const { limit, offset } = pagination;
    console.log(`get all coffee with limit #${limit} and offset #${offset}`);
    return this.coffeesService.getAllCoffees();
  }

  @Get(':id')
  getOneCoffee(@Param('id') id: string): Coffee {
    return this.coffeesService.getOneCoffee(id);
  }

  @Post()
  createCoffee(@Body() body: Coffee): Coffee[] {
    return this.coffeesService.createCoffee(body);
  }

  @Patch(':id')
  patchCoffee(@Param('id') id: string, @Body() body: UCoffee): Coffee {
    return this.coffeesService.updateCoffee(id, body);
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string): Coffee[] {
    return this.coffeesService.removeCoffee(id);
  }
}
