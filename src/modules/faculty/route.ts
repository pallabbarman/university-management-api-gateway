/* eslint-disable comma-dangle */
import { Router } from 'express';
import auth from 'middlewares/auth';
import validateRequest from 'middlewares/validateRequest';
import { USER_ROLE } from 'types/user';
import {
    deleteFaculty,
    getAllFaculties,
    getFaculty,
    getFacultyProfile,
    getMyCourseStudents,
    getMyCourses,
    updateFaculty,
} from './controller';
import { updateFacultyValidation } from './validation';

const router = Router();

router.get('/', getAllFaculties);
router.get('/:id', getFaculty);
router.get('/profile/:id', getFacultyProfile);
router.get('/my-courses', auth(USER_ROLE.FACULTY), getMyCourses);
router.get('/my-course-students', auth(USER_ROLE.FACULTY), getMyCourseStudents);
router.patch(
    '/:id',
    validateRequest(updateFacultyValidation),
    auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
    updateFaculty
);
router.delete('/:id', auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN), deleteFaculty);

const facultyRoutes = router;

export default facultyRoutes;
