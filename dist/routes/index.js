"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = __importDefault(require("../modules/semester/route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/semesters',
        route: route_1.default,
    },
    // {
    //     path: '/departments',
    //     route: departmentRoutes,
    // },
    // {
    //     path: '/academic-faculties',
    //     route: academicFacultyRoutes,
    // },
    // {
    //     path: '/buildings',
    //     route: buildingRoutes,
    // },
    // {
    //     path: '/rooms',
    //     route: roomRoutes,
    // },
    // {
    //     path: '/courses',
    //     route: courseRoutes,
    // },
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
