import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCharacteristicsDTO {
  @IsString()
  @IsNotEmpty({ message: 'Nome da característica não pode ser vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazia' })
  description: string;
}
