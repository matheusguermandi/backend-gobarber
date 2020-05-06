import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'Matheus',
      email: 'matheus@hotmail.com',
      password: 'secret',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Matheus',
      email: 'matheus@hotmail.com',
      password: 'secret',
    });

    expect(
      createUser.execute({
        name: 'Matheus',
        email: 'matheus@hotmail.com',
        password: 'secret',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
