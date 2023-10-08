"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFacultyProfile = exports.findMyCourseStudents = exports.findMyCourse = exports.removeFaculty = exports.editFaculty = exports.findFaculty = exports.findAllFaculties = void 0;
const axios_1 = require("../../utils/axios");
const findAllFaculties = async (req) => {
    const response = await axios_1.CoreService.get('/faculties', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllFaculties = findAllFaculties;
const findFaculty = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.get(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findFaculty = findFaculty;
const editFaculty = async (req) => {
    const { id } = req.params;
    const response = await axios_1.AuthService.patch(`/faculties/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editFaculty = editFaculty;
const removeFaculty = async (req) => {
    const { id } = req.params;
    const response = await axios_1.AuthService.delete(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeFaculty = removeFaculty;
const findMyCourse = async (req) => {
    const response = await axios_1.CoreService.get('/faculties/my-courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findMyCourse = findMyCourse;
const findMyCourseStudents = async (req) => {
    const response = await axios_1.CoreService.get('/faculties/my-course-students', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findMyCourseStudents = findMyCourseStudents;
const findFacultyProfile = async (req) => {
    const { id } = req.params;
    const response = await axios_1.AuthService.get(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findFacultyProfile = findFacultyProfile;
