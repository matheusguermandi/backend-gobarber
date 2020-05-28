import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('Matheus01');
    expect(profile.email).toBe('matheus_guermandi@hotmail.com');
  });

  it('should not be able to show the profile from non-existing user', async () => {
    expect(
      showProfile.execute({
        user_id: 'non-existing',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
