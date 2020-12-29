import { Injectable } from '@nestjs/common';
import { Coffee } from '../entities/coffee.entity';
import { UCoffee } from '../entities/ucoffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Bla bla',
      brand: 'bla bla',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  getAllCoffees(): Coffee[] {
    return [...this.coffees];
  }

  getOneCoffee(id: string): Coffee {
    return this.coffees.find((coffee: Coffee) => coffee.id === Number(id));
  }

  createCoffee(coffee: Coffee): Coffee[] {
    this.coffees.push(coffee);
    return [...this.coffees];
  }

  updateCoffee(id: string, coffee: UCoffee): Coffee {
    const updateCoffee = this.coffees.find(
      (coffee: Coffee) => coffee.id === Number(id),
    );
    if (updateCoffee) {
      updateCoffee.brand = coffee.brand;
      updateCoffee.flavors = coffee.flavors;
      updateCoffee.name = coffee.name;
    }
    return updateCoffee;
  }

  removeCoffee(id: string): Coffee[] {
    this.coffees = this.coffees.filter(
      (coffee: Coffee) => coffee.id !== Number(id),
    );
    return [...this.coffees];
  }
}
