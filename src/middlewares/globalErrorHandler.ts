/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from 'axios';
import configs from 'configs/index';
import ApiError from 'errors/apiError';
import handleZodError from 'errors/handleZodError';
import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { IGenericErrorMessage } from 'types/errors';
import { errorLogger } from 'utils/logger';
import { ZodError } from 'zod';

const globalErrorHandlers: ErrorRequestHandler = (err, _req, res, _next) => {
    configs.env === 'development'
        ? console.log('globalErrorHandler ~', err)
        : errorLogger.error('globalErrorHandler ~', err);

    let statusCode = httpStatus.INTERNAL_SERVER_ERROR as number;
    let message = 'Internal server error!';
    let errorMessages: IGenericErrorMessage[] = [];

    if (err instanceof AxiosError) {
        statusCode = err.response?.status || httpStatus.INTERNAL_SERVER_ERROR;
        message = err.response?.data?.message || 'Something went wrong!';
        errorMessages = err.response?.data.errorMessage || [];
    } else if (err instanceof ZodError) {
        const error = handleZodError(err);
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error.errorMessage;
    } else if (err instanceof ApiError) {
        statusCode = err?.statusCode;
        message = err?.message;
        errorMessages = err?.message
            ? [
                  {
                      path: '',
                      message: err?.message,
                  },
              ]
            : [];
    } else if (err instanceof Error) {
        message = err?.message;
        errorMessages = err?.message
            ? [
                  {
                      path: '',
                      message: err?.message,
                  },
              ]
            : [];
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: configs.env !== 'production' ? err?.stack : undefined,
    });
};

export default globalErrorHandlers;
