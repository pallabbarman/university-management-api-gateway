"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBuilding = exports.updateBuilding = exports.getBuilding = exports.getAllBuildings = exports.createBuilding = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const service_1 = require("./service");
exports.createBuilding = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.insertBuilding)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getAllBuildings = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findAllBuildings)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.getBuilding = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.findBuilding)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.updateBuilding = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.editBuilding)(req);
    (0, sendResponse_1.default)(res, result);
});
exports.deleteBuilding = (0, catchAsync_1.default)(async (req, res) => {
    const result = await (0, service_1.removeBuilding)(req);
    (0, sendResponse_1.default)(res, result);
});
