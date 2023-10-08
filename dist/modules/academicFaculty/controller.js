"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAcademicFaculty = exports.updateAcademicFaculty = exports.getAcademicFaculty = exports.getAllAcademicFaculties = exports.createAcademicFaculty = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createAcademicFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertAcademicFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAllAcademicFaculties = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllAcademicFaculties)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAcademicFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAcademicFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateAcademicFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editAcademicFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteAcademicFaculty = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeAcademicFaculty)(req);
    (0, sendResponse_1.default)(res, result);
});
