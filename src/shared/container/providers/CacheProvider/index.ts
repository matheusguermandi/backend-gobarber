import { container } from 'tsyringe';

import cacheConfig from '@config/cache';

import ICacheProvider from './models/ICacheProvider';

import RedisCacheProvider from './implementations/RedisCacheProvider';

const provider = {
  redis: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>(
  'CacheProvider',
  provider[cacheConfig.driver],
);
