"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFacultyProfile = exports.getMyCourseStudents = exports.getMyCourses = exports.deleteFaculty = exports.updateFaculty = exports.getFaculty = exports.getAllFaculties = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.getAllFaculties = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllFaculties)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getMyCourses = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findMyCourse)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getMyCourseStudents = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findMyCourseStudents)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getFacultyProfile = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findFacultyProfile)(req);
    (0, sendResponse_1.default)(res, result);
});
