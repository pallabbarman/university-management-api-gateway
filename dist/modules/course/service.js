"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCourse = exports.editCourse = exports.findCourse = exports.findAllCourses = exports.insertCourse = void 0;
const axios_1 = require("../../utils/axios");
const insertCourse = async (req) => {
    const response = await axios_1.CoreService.post('/courses', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertCourse = insertCourse;
const findAllCourses = async (req) => {
    const response = await axios_1.CoreService.get('/courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllCourses = findAllCourses;
const findCourse = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.get(`/courses/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findCourse = findCourse;
const editCourse = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.patch(`/courses/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editCourse = editCourse;
const removeCourse = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.delete(`/courses/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeCourse = removeCourse;
