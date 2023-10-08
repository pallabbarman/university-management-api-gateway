import { Router } from 'express';
import academicFacultyRoutes from 'modules/academicFaculty/route';
import adminRoutes from 'modules/admin/route';
import buildingRoutes from 'modules/building/route';
import courseRoutes from 'modules/course/route';
import departmentRoutes from 'modules/department/route';
import facultyRoutes from 'modules/faculty/route';
import semesterRoutes from 'modules/semester/route';
import userRoutes from 'modules/user/route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/admins',
        route: adminRoutes,
    },
    {
        path: '/faculties',
        route: facultyRoutes,
    },
    {
        path: '/semesters',
        route: semesterRoutes,
    },
    {
        path: '/departments',
        route: departmentRoutes,
    },
    {
        path: '/academic-faculties',
        route: academicFacultyRoutes,
    },
    {
        path: '/buildings',
        route: buildingRoutes,
    },
    // {
    //     path: '/rooms',
    //     route: roomRoutes,
    // },
    {
        path: '/courses',
        route: courseRoutes,
    },
    // {
    //     path: '/semester-registration',
    //     route: semesterRegistrationRoutes,
    // },
    // {
    //     path: '/offered-courses',
    //     route: offeredCourseRoutes,
    // },
    // {
    //     path: '/offered-course-sections',
    //     route: offeredCourseSectionRoutes,
    // },
    // {
    //     path: '/offered-course-class-schedules',
    //     route: offeredCourseClassScheduleRoutes,
    // },
    // {
    //     path: '/student-enrolled-courses',
    //     route: studentEnrolledCourseRoutes,
    // },
    // {
    //     path: '/student-enrolled-course-marks',
    //     route: studentEnrolledCourseMarkRoutes,
    // },
    // {
    //     path: '/student-semester-payments',
    //     route: studentSemesterPaymentRoutes,
    // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
