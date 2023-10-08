"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.updateAdmin = exports.getAdmin = exports.getAllAdmins = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.getAllAdmins = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllAdmins)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAdmin)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editAdmin)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeAdmin)(req);
    (0, sendResponse_1.default)(res, result);
});
