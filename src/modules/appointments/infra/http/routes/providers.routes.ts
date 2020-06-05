import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import DayAvailabilityController from '@modules/appointments/infra/http/controllers/DayAvailabilityController';
import MonthAvailabilityController from '@modules/appointments/infra/http/controllers/MonthAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const dayAvailabilityController = new DayAvailabilityController();
const monthAvailabilityController = new MonthAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/day-availability',
  dayAvailabilityController.index,
);

providersRouter.get(
  '/:provider_id/month-availability',
  monthAvailabilityController.index,
);

export default providersRouter;
