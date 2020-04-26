import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  senha: string;
}

class CreateUserService {
  public async execute({ name, email, senha }: Request): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    /* if ( {
      throw Error('');
    }

    const user = userRepository.create({
      name,
      email,
      senha,
    });

    await userRepository.save(user);

    return user;
    */
  }
}

export default CreateUserService;
