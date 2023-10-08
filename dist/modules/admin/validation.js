"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminValidation = void 0;
/* eslint-disable import/prefer-default-export */
const zod_1 = __importDefault(require("zod"));
exports.updateAdminValidation = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.object({
            firstName: zod_1.default.string().optional(),
            lastName: zod_1.default.string().optional(),
            middleName: zod_1.default.string().optional(),
        }),
        dateOfBirth: zod_1.default.string().optional(),
        gender: zod_1.default.string().optional(),
        bloodGroup: zod_1.default.string().optional(),
        email: zod_1.default.string().email().optional(),
        contactNo: zod_1.default.string().optional(),
        emergencyContactNo: zod_1.default.string().optional(),
        presentAddress: zod_1.default.string().optional(),
        permanentAddress: zod_1.default.string().optional(),
        department: zod_1.default.string().optional(),
        designation: zod_1.default.string().optional(),
    }),
});
