"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSemester = exports.updateSemester = exports.getSemester = exports.getAllSemesters = exports.createSemester = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createSemester = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertSemester)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAllSemesters = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllSemesters)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getSemester = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findSemester)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateSemester = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editSemester)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteSemester = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeSemester)(req);
    (0, sendResponse_1.default)(res, result);
});
