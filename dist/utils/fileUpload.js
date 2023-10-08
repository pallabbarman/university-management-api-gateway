"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const cloudinary_1 = require("cloudinary");
const index_1 = __importDefault(require("../configs/index"));
const fs = __importStar(require("fs"));
const multer_1 = __importDefault(require("multer"));
cloudinary_1.v2.config({
    cloud_name: index_1.default.cloudinary.cloudName,
    api_key: index_1.default.cloudinary.apiKey,
    api_secret: index_1.default.cloudinary.apiSecret,
});
const storage = multer_1.default.diskStorage({
    destination(_req, _file, callback) {
        callback(null, 'uploads/');
    },
    filename(_req, file, callback) {
        callback(null, file.originalname);
    },
});
exports.uploadFile = (0, multer_1.default)({ storage });
const uploadToCloudinary = async (file) => new Promise((resolve, reject) => {
    cloudinary_1.v2.uploader.upload(file.path, (error, result) => {
        fs.unlinkSync(file.path);
        if (error) {
            reject(error);
        }
        else {
            resolve(result);
        }
    });
});
exports.default = uploadToCloudinary;
