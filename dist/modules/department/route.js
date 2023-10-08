"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable comma-dangle */
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_1 = require("../../types/user");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const router = (0, express_1.Router)();
router.get('/', controller_1.getAllDepartments);
router.get('/:id', controller_1.getDepartment);
router.post('/', (0, validateRequest_1.default)(validation_1.departmentValidation), (0, auth_1.default)(user_1.USER_ROLE.ADMIN, user_1.USER_ROLE.SUPER_ADMIN), controller_1.createDepartment);
router.patch('/:id', (0, validateRequest_1.default)(validation_1.updateDepartmentValidation), (0, auth_1.default)(user_1.USER_ROLE.ADMIN, user_1.USER_ROLE.SUPER_ADMIN), controller_1.updateDepartment);
router.delete('/:id', (0, auth_1.default)(user_1.USER_ROLE.ADMIN, user_1.USER_ROLE.SUPER_ADMIN), controller_1.deleteDepartment);
const departmentRoutes = router;
exports.default = departmentRoutes;