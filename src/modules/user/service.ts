/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import { Request } from 'express';
import { IUploadFile } from 'types/file';
import { AuthService } from 'utils/axios';
import uploadToCloudinary from 'utils/fileUpload';

export const insertStudent = async (req: Request) => {
    const file = req.file as IUploadFile;
    const uploadedImage = await uploadToCloudinary(file);

    if (uploadedImage) {
        req.body.profileImage = uploadedImage.secure_url;
    }

    const { department, academicFaculty, semester } = req.body.student;

    const departmentResponse = await AuthService.get(`/departments?syncId=${department}`);

    if (departmentResponse.data && Array.isArray(departmentResponse.data)) {
        req.body.student.department = departmentResponse.data[0].id;
    }

    const academicFacultyResponse = await AuthService.get(
        `/academic-faculties?syncId=${academicFaculty}`
    );

    if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
        req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
    }

    const semesterResponse = await AuthService.get(`/semesters?syncId=${semester}`);

    if (semesterResponse.data && Array.isArray(semesterResponse.data)) {
        req.body.student.semester = semesterResponse.data[0].id;
    }

    const response = await AuthService.post('/users/create-student', req.body, {
        headers: {
            Authorization: req.headers.authorization,
        },
    });

    return response;
};
