"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = __importDefault(require("../modules/academicFaculty/route"));
const route_2 = __importDefault(require("../modules/admin/route"));
const route_3 = __importDefault(require("../modules/building/route"));
const route_4 = __importDefault(require("../modules/course/route"));
const route_5 = __importDefault(require("../modules/department/route"));
const route_6 = __importDefault(require("../modules/faculty/route"));
const route_7 = __importDefault(require("../modules/semester/route"));
const route_8 = __importDefault(require("../modules/user/route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: route_8.default,
    },
    {
        path: '/admins',
        route: route_2.default,
    },
    {
        path: '/faculties',
        route: route_6.default,
    },
    {
        path: '/semesters',
        route: route_7.default,
    },
    {
        path: '/departments',
        route: route_5.default,
    },
    {
        path: '/academic-faculties',
        route: route_1.default,
    },
    {
        path: '/buildings',
        route: route_3.default,
    },
    // {
    //     path: '/rooms',
    //     route: roomRoutes,
    // },
    {
        path: '/courses',
        route: route_4.default,
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
exports.default = router;
