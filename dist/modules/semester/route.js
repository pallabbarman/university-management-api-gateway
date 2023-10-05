"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post('/', controller_1.createSemester);
const semesterRoutes = router;
exports.default = semesterRoutes;