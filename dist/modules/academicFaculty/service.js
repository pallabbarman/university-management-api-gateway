"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAcademicFaculty = exports.editAcademicFaculty = exports.findAcademicFaculty = exports.findAllAcademicFaculties = exports.insertAcademicFaculty = void 0;
const axios_1 = require("../../utils/axios");
const insertAcademicFaculty = async (req) => {
    const response = await axios_1.CoreService.post('/academic-faculties', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertAcademicFaculty = insertAcademicFaculty;
const findAllAcademicFaculties = async (req) => {
    const response = await axios_1.CoreService.get('/academic-faculties', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllAcademicFaculties = findAllAcademicFaculties;
const findAcademicFaculty = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.get(`/academic-faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAcademicFaculty = findAcademicFaculty;
const editAcademicFaculty = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.patch(`/academic-faculties/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editAcademicFaculty = editAcademicFaculty;
const removeAcademicFaculty = async (req) => {
    const { id } = req.params;
    const response = await axios_1.CoreService.delete(`/academic-faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeAcademicFaculty = removeAcademicFaculty;
