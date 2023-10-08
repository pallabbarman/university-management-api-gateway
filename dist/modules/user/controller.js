"use strict";
/* eslint-disable import/prefer-default-export */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createStudent = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertStudent)(req);
    (0, sendResponse_1.default)(res, result);
});
