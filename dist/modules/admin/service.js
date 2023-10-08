"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdmin = exports.editAdmin = exports.findAdmin = exports.findAllAdmins = void 0;
const axios_1 = require("../../utils/axios");
const findAllAdmins = async (req) => {
    const response = await axios_1.AuthService.get('/admins', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAllAdmins = findAllAdmins;
const findAdmin = async (req) => {
    const { id } = req.params;
    const response = await axios_1.AuthService.get(`/admins/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.findAdmin = findAdmin;
const editAdmin = async (req) => {
    const { id } = req.params;
    const response = await axios_1.AuthService.patch(`/admins/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.editAdmin = editAdmin;
const removeAdmin = async (req) => {
    const { id } = req.params;
    const response = await axios_1.AuthService.delete(`/admins/${id}`, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });
    return response;
};
exports.removeAdmin = removeAdmin;
