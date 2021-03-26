import { Query, Resolver } from '@nestjs/graphql';
import { Pet } from './entity/pet.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}
  @Query((returns) => [Pet])
  findAllPets(): Promise<Pet[]> {
    return this.petsService.findAllPets();
  }
}
