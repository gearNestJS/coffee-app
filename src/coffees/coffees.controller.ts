import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

interface ICoffee {
  brand: string;
  year: number;
  price: number;
}

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAllCoffees(): string {
    return 'get all coffee';
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
