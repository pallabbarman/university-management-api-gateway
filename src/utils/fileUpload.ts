/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import { v2 as cloudinary } from 'cloudinary';
import configs from 'configs/index';
import * as fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from 'types/file';

cloudinary.config({
    cloud_name: configs.cloudinary.cloudName,
    api_key: configs.cloudinary.apiKey,
    api_secret: configs.cloudinary.apiSecret,
});

const storage = multer.diskStorage({
    destination(_req, _file, callback) {
        callback(null, 'uploads/');
    },
    filename(_req, file, callback) {
        callback(null, file.originalname);
    },
});

export const uploadFile = multer({ storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse | undefined> =>
    new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
            fs.unlinkSync(file.path);
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });

export default uploadToCloudinary;
