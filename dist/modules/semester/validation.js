"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSemesterValidation = exports.semesterValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const constant_1 = require("./constant");
exports.semesterValidation = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.enum([...constant_1.semesterTitles], {
            required_error: 'Title is required!',
        }),
        year: zod_1.default.number({
            required_error: 'Year is required!',
        }),
        code: zod_1.default.enum([...constant_1.semesterCodes], {
            required_error: 'Code is required!',
        }),
        startMonth: zod_1.default.enum([...constant_1.semesterMonths], {
            required_error: 'Start month is required!',
        }),
        endMonth: zod_1.default.enum([...constant_1.semesterMonths], {
            required_error: 'End month is required!',
        }),
    }),
});
exports.updateSemesterValidation = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.enum([...constant_1.semesterTitles]).optional(),
        year: zod_1.default.number().optional(),
        code: zod_1.default.enum([...constant_1.semesterCodes]).optional(),
        startMonth: zod_1.default.enum([...constant_1.semesterMonths]).optional(),
        endMonth: zod_1.default.enum([...constant_1.semesterMonths]).optional(),
    }),
});
