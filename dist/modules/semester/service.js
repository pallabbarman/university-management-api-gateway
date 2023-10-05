"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSemester = void 0;
const axios_1 = require("../../utils/axios");
const insertSemester = async (req) => {
    const response = await axios_1.CoreService.post('/semesters', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.insertSemester = insertSemester;
