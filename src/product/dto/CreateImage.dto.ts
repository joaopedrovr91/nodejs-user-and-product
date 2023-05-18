import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateImageDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  description: string;
}
