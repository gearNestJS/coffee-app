import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './providers/coffees.service';

interface ICoffee {
  brand: string;
  year: number;
  price: number;
}

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getAllCoffees(@Query() pagination): string {
    const { limit, offset } = pagination;
    return `get all coffee with limit #${limit} and offset #${offset}`;
  }

  @Get('favorites')
  getFlavoursCoffee(): string {
    return 'flavours coffees';
  }

  @Get(':id')
  getOneCoffee(@Param('id') id: string): string {
    return `return selected sort ${id} of coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  createCoffee(@Body() body: ICoffee): ICoffee {
    return body;
  }

  @Patch(':id')
  patchCoffee(@Param('id') id: string, @Body() body: ICoffee): string {
    return `patch by ${body.brand} coffee with id #${id}`;
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string): string {
    return `remove coffee with id #${id}`;
  }
}
