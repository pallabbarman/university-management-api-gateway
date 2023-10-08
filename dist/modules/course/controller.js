"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourse = exports.getAllCourses = exports.createCourse = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createCourse = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertCourse)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAllCourses = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllCourses)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getCourse = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findCourse)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateCourse = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editCourse)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteCourse = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeCourse)(req);
    (0, sendResponse_1.default)(res, result);
});
