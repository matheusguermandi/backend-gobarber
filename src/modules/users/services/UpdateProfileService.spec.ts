// import AppError from '@shared/errors/AppError';

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

  it('should be able to update the user profile', async () => {
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
});
