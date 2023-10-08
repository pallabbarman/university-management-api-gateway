"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidation = void 0;
/* eslint-disable import/prefer-default-export */
const zod_1 = __importDefault(require("zod"));
exports.studentValidation = zod_1.default.object({
    password: zod_1.default.string().optional(),
    student: zod_1.default.object({
        name: zod_1.default.object({
            firstName: zod_1.default.string({
                required_error: 'First name is required',
            }),
            lastName: zod_1.default.string({
                required_error: 'Last name is required',
            }),
            middleName: zod_1.default.string().optional(),
        }),
        gender: zod_1.default.string({
            required_error: 'Gender is required',
        }),
        dateOfBirth: zod_1.default.string({
            required_error: 'Date of birth is required',
        }),
        email: zod_1.default
            .string({
            required_error: 'Email is required',
        })
            .email(),
        contactNo: zod_1.default.string({
            required_error: 'Contact number is required',
        }),
        emergencyContactNo: zod_1.default.string({
            required_error: 'Emergency contact number is required',
        }),
        bloodGroup: zod_1.default.string().optional(),
        presentAddress: zod_1.default.string({
            required_error: 'Present address is required',
        }),
        permanentAddress: zod_1.default.string({
            required_error: 'Permanent address is required',
        }),
        semester: zod_1.default.string({
            required_error: 'Academic semester is required',
        }),
        department: zod_1.default.string({
            required_error: 'Academic department is required',
        }),
        academicFaculty: zod_1.default.string({
            required_error: 'Academic faculty is required',
        }),
        guardian: zod_1.default.object({
            fatherName: zod_1.default.string({
                required_error: 'Father name is required',
            }),
            fatherOccupation: zod_1.default.string({
                required_error: 'Father occupation is required',
            }),
            fatherContactNo: zod_1.default.string({
                required_error: 'Father contact number is required',
            }),
            motherName: zod_1.default.string({
                required_error: 'Mother name is required',
            }),
            motherOccupation: zod_1.default.string({
                required_error: 'Mother occupation is required',
            }),
            motherContactNo: zod_1.default.string({
                required_error: 'Mother contact number is required',
            }),
            address: zod_1.default.string({
                required_error: 'Guardian address is required',
            }),
        }),
        localGuardian: zod_1.default.object({
            name: zod_1.default.string({
                required_error: 'Local guardian name is required',
            }),
            occupation: zod_1.default.string({
                required_error: 'Local guardian occupation is required',
            }),
            contactNo: zod_1.default.string({
                required_error: 'Local guardian contact number is required',
            }),
            address: zod_1.default.string({
                required_error: 'Local guardian address is required',
            }),
        }),
    }),
});
