"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const zod_1 = __importDefault(require("zod"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const envVarsZodSchema = zod_1.default.object({
    NODE_ENV: zod_1.default.string(),
    PORT: zod_1.default
        .string()
        .default('5000')
        .refine((val) => Number(val)),
    JWT_SECRET: zod_1.default.string(),
    REDIS_URL: zod_1.default.string(),
    AUTH_SERVICE_URL: zod_1.default.string(),
    CORE_SERVICE_URL: zod_1.default.string(),
    CLOUDINARY_CLOUD_NAME: zod_1.default.string(),
    CLOUDINARY_API_KEY: zod_1.default.string(),
    CLOUDINARY_API_SECRET: zod_1.default.string(),
});
const envVars = envVarsZodSchema.parse(process.env);
exports.default = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwt: {
        secret: envVars.JWT_SECRET,
    },
    redis: {
        url: envVars.REDIS_URL,
    },
    authServiceUrl: envVars.AUTH_SERVICE_URL,
    coreServiceUrl: envVars.CORE_SERVICE_URL,
    cloudinary: {
        cloudName: envVars.CLOUDINARY_CLOUD_NAME,
        apiKey: envVars.CLOUDINARY_API_KEY,
        apiSecret: envVars.CLOUDINARY_API_SECRET,
    },
};
