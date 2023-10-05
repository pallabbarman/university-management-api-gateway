"use strict";
/* eslint-disable import/prefer-default-export */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSemester = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createSemester = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertSemester)(req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Semester is created successfully!',
        data: result,
    });
});
