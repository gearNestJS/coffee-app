import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
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
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto): Coffee[] {
    return this.coffeesService.createCoffee(createCoffeeDto);
  }

  @Patch(':id')
  patchCoffee(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Coffee {
    return this.coffeesService.updateCoffee(id, updateCoffeeDto);
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string): Coffee[] {
    return this.coffeesService.removeCoffee(id);
  }
}
