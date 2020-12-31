import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './providers/coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getAllCoffees(@Query() pagination) {
    const { limit, offset } = pagination;
    console.log(`get all coffee with limit #${limit} and offset #${offset}`);
    return this.coffeesService.getAllCoffees();
  }

  @Get(':id')
  getOneCoffee(@Param('id') id: number): Promise<Coffee> {
    return this.coffeesService.getOneCoffee(id);
  }

  @Post()
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeesService.createCoffee(createCoffeeDto);
  }

  @Patch(':id')
  patchCoffee(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    return this.coffeesService.updateCoffee(id, updateCoffeeDto);
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: number): Promise<Coffee> {
    return this.coffeesService.removeCoffee(id);
  }
}
