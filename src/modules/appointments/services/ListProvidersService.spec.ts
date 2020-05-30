import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user01 = await fakeUsersRepository.create({
      name: 'Matheus01',
      email: 'matheus_guermandi@hotmail.com',
      password: '123',
    });

    const user02 = await fakeUsersRepository.create({
      name: 'Matheus02',
      email: 'matheus_guermandi@hotmail.com02',
      password: '123',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Matheus03',
      email: 'matheus_guermandi@hotmail.com03',
      password: '123',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user01, user02]);
  });
});
