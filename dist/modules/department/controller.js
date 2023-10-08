"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartment = exports.updateDepartment = exports.getDepartment = exports.getAllDepartments = exports.createDepartment = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createDepartment = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertDepartment)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAllDepartments = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllDepartments)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getDepartment = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findDepartment)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateDepartment = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editDepartment)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteDepartment = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeDepartment)(req);
    (0, sendResponse_1.default)(res, result);
});
