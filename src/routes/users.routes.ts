import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

// import usersRepository from '../repositories/usersRepository';
// import CreateuserService from '../services/CreateuserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  // const userRepository = getCustomRepository(usersRepository);
  // const users = await userRepository.find();
  return response.json('users');
});

usersRouter.post('/', async (request, response) => {
  try {
    return response.json('');
  } catch (err) {
    return response.status(400).json({ erro: err.message });
  }
});

export default usersRouter;
