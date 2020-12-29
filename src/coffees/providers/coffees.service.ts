import { Injectable } from '@nestjs/common';
import { Coffee } from '../entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Bla bla',
      brand: 'bla bla',
      flavors: ['chocolate', 'vanilla']
    }
  ];
}
