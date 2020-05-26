import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    const updateUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Matheus02',
      email: 'matheusguermand@gmail.com',
    });

    expect(updateUser.name).toBe('Matheus02');
    expect(updateUser.email).toBe('matheusguermand@gmail.com');
  });

  it('should be able to change to another email ', async () => {
    await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    const user = await fakeUsersRepository.create({
      name: 'Matheus02',
      email: 'matheusguermand@gmail.com',
      password: '123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Matheus_02',
        email: 'matheus_guermandi@hotmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    const updateUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Matheus02',
      email: 'matheusguermand@gmail.com',
      old_password: '123',
      password: '123123',
    });

    expect(updateUser.password).toBe('123123');
  });

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Matheus02',
        email: 'matheusguermand@gmail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Matheus02',
        email: 'matheusguermand@gmail.com',
        old_password: 'abc123',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
