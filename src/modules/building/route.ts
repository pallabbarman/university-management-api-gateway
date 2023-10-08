/* eslint-disable comma-dangle */
import { Router } from 'express';
import auth from 'middlewares/auth';
import validateRequest from 'middlewares/validateRequest';
import { USER_ROLE } from 'types/user';
import {
    createBuilding,
    deleteBuilding,
    getAllBuildings,
    getBuilding,
    updateBuilding,
} from './controller';
import { buildingValidation, updateBuildingValidation } from './validation';

const router = Router();

router.get('/', getAllBuildings);
router.get('/:id', getBuilding);
router.post(
    '/',
    validateRequest(buildingValidation),
    auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
    createBuilding
);
router.patch(
    '/:id',
    validateRequest(updateBuildingValidation),
    auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
    updateBuilding
);
router.delete('/:id', auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN), deleteBuilding);

const buildingRoutes = router;

export default buildingRoutes;
