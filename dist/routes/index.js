"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// const moduleRoutes = [
//     {
//         path: '/students',
//         route: studentRoutes,
//     },
//     {
//         path: '/semesters',
//         route: semesterRoutes,
//     },
//     {
//         path: '/departments',
//         route: departmentRoutes,
//     },
//     {
//         path: '/academic-faculties',
//         route: academicFacultyRoutes,
//     },
//     {
//         path: '/buildings',
//         route: buildingRoutes,
//     },
//     {
//         path: '/rooms',
//         route: roomRoutes,
//     },
//     {
//         path: '/courses',
//         route: courseRoutes,
//     },
//     {
//         path: '/semester-registration',
//         route: semesterRegistrationRoutes,
//     },
//     {
//         path: '/offered-courses',
//         route: offeredCourseRoutes,
//     },
//     {
//         path: '/offered-course-sections',
//         route: offeredCourseSectionRoutes,
//     },
//     {
//         path: '/offered-course-class-schedules',
//         route: offeredCourseClassScheduleRoutes,
//     },
//     {
//         path: '/student-enrolled-courses',
//         route: studentEnrolledCourseRoutes,
//     },
//     {
//         path: '/student-enrolled-course-marks',
//         route: studentEnrolledCourseMarkRoutes,
//     },
//     {
//         path: '/student-semester-payments',
//         route: studentSemesterPaymentRoutes,
//     },
// ];
// moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
