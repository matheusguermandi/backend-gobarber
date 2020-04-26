import { Router } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
  } catch (err) {
    return response.status(400).json({ erro: err.message });
  }
});

export default sessionsRouter;
