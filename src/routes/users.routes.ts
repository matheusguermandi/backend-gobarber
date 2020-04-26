import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userService = new CreateUserService();
    const user = await userService.execute({ name, email, password });

    return response.send(user);
  } catch (err) {
    return response.status(400).json({ erro: err.message });
  }
});

export default usersRouter;
