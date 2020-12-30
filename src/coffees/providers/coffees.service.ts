import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  getOneCoffee(id: number): Coffee {
    const coffee = this.coffees.find((coffee: Coffee) => coffee.id === id);
    if (!coffee) {
      throw new HttpException(`Coffee with id #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;

  }

  createCoffee(coffee: Coffee): Coffee[] {
    this.coffees.push(coffee);
    return [...this.coffees];
  }

  updateCoffee(id: number, coffee: UCoffee): Coffee {
    const updateCoffee = this.coffees.find(
      (coffee: Coffee) => coffee.id === id,
    );
    if (updateCoffee) {
      updateCoffee.brand = coffee.brand;
      updateCoffee.flavors = coffee.flavors;
      updateCoffee.name = coffee.name;
    }
    return updateCoffee;
  }

  removeCoffee(id: number): Coffee[] {
    this.coffees = this.coffees.filter(
      (coffee: Coffee) => coffee.id !== id,
    );
    return [...this.coffees];
  }
}
