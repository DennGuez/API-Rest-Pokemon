import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

/* PartialType nos dice que va a tener todas la propiedades de CreatePokemonDto 
   con la excepción que todas serán opcionales */
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
