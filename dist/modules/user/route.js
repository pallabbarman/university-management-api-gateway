"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../types/user");
const fileUpload_1 = require("../../utils/fileUpload");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const router = (0, express_1.Router)();
router.post('/create-student', (0, auth_1.default)(user_1.USER_ROLE.ADMIN, user_1.USER_ROLE.SUPER_ADMIN), fileUpload_1.uploadFile.single('file'), (req, res, next) => {
    req.body = validation_1.studentValidation.parse(JSON.parse(req.body.data));
    return (0, controller_1.createStudent)(req, res, next);
});
const userRoutes = router;
exports.default = userRoutes;
