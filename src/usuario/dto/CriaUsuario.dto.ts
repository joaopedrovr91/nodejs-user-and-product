import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/emailEhUnico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;
  @IsEmail(undefined, { message: 'O email e invalido' })
  @EmailEhUnico({ message: 'Já existe um usuário com esse e-mail' })
  email: string;
  @MinLength(6, { message: 'A senha tem que ter pelo menos 6 caracteres' })
  senha: string;
}
