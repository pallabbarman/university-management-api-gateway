/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import { Router } from 'express';
import auth from 'middlewares/auth';
import validateRequest from 'middlewares/validateRequest';
import { USER_ROLE } from 'types/user';
import { deleteAdmin, getAdmin, getAllAdmins, updateAdmin } from './controller';
import { updateAdminValidation } from './validation';

const router = Router();

router.get('/', getAllAdmins);
router.get('/:id', getAdmin);
router.patch(
    '/:id',
    validateRequest(updateAdminValidation),
    auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
    updateAdmin
);
router.delete('/:id', auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN), deleteAdmin);

const adminRoutes = router;

export default adminRoutes;
