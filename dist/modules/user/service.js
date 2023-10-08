"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertStudent = void 0;
const axios_1 = require("../../utils/axios");
const fileUpload_1 = __importDefault(require("../../utils/fileUpload"));
const insertStudent = async (req) => {
    const file = req.file;
    const uploadedImage = await (0, fileUpload_1.default)(file);
    if (uploadedImage) {
        req.body.profileImage = uploadedImage.secure_url;
    }
    const { department, academicFaculty, semester } = req.body.student;
    const departmentResponse = await axios_1.AuthService.get(`/departments?syncId=${department}`);
    if (departmentResponse.data && Array.isArray(departmentResponse.data)) {
        req.body.student.department = departmentResponse.data[0].id;
    }
    const academicFacultyResponse = await axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`);
    if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
        req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
    }
    const semesterResponse = await axios_1.AuthService.get(`/semesters?syncId=${semester}`);
    if (semesterResponse.data && Array.isArray(semesterResponse.data)) {
        req.body.student.semester = semesterResponse.data[0].id;
    }
    const response = await axios_1.AuthService.post('/users/create-student', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertStudent = insertStudent;
