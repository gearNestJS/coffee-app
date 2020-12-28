import { Controller, Get } from '@nestjs/common';

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
}
