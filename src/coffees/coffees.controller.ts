import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  getAllCoffees(): string {
    return 'get all coffee';
  }

  @Get('favorites')
  getFlavoursCoffee() {
    return 'flavours coffees';
  }

  @Get(':id')
  getOneCoffee(@Param('id') id: string): string {
    return `return selected sort ${id} of coffee`;
  }

  @Post()
  createCoffee(@Body() body) {
    return body;
  }
}
