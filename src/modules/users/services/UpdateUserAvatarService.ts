import path from 'path';
import fs from 'fs';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  userId: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  constructor(private userRepository: IUsersRepository) {}

  public async execute({ userId, avatarFilename }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;
    await this.userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
