import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/emailEhUnico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  @IsOptional()
  nome: string;
  @IsEmail(undefined, { message: 'O email e invalido' })
  @EmailEhUnico({ message: 'Já existe um usuário com esse e-mail' })
  @IsOptional()
  email: string;
  @MinLength(6, { message: 'A senha tem que ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
