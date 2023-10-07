/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { NextFunction, Request, Response, Router } from 'express';
import auth from 'middlewares/auth';
import { USER_ROLE } from 'types/user';
import { uploadFile } from 'utils/fileUpload';
import { createStudent } from './controller';
import { studentValidation } from './validation';

const router = Router();

router.post(
    '/create-student',
    auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
    uploadFile.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = studentValidation.parse(JSON.parse(req.body.data));
        return createStudent(req, res, next);
    }
);

const userRoutes = router;

export default userRoutes;
