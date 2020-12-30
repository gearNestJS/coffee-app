import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from '../dto/create-coffee.dto';
import { UpdateCoffeeDto } from '../dto/update-coffee.dto';
import { Coffee } from '../entities/coffee.entity';
import { UCoffee } from '../entities/ucoffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  getAllCoffees() {
    return this.coffeeRepository.find();
  }

  async getOneCoffee(id: number): Promise<CreateCoffeeDto> {
    const coffee: CreateCoffeeDto = await this.coffeeRepository.findOne(id);
    if (!coffee) {
      throw new HttpException(
        `Coffee with id #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return coffee;
  }

  createCoffee(createCoffeeDto: CreateCoffeeDto): Promise<CreateCoffeeDto> {
    const coffee: CreateCoffeeDto = this.coffeeRepository.create(
      createCoffeeDto,
    );
    return this.coffeeRepository.save(coffee);
  }

  async updateCoffee(
    id: number,
    updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<UpdateCoffeeDto> {
    const coffee: UpdateCoffeeDto = await this.coffeeRepository.preload({
      id,
      ...updateCoffeeDto
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee with id #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async removeCoffee(id: number): Promise<CreateCoffeeDto> {
    const coffee: CreateCoffeeDto = await this.coffeeRepository.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id #${id} not found`);
    }
    return this.coffeeRepository.remove(coffee);
  }
}
