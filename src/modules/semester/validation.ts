import z from 'zod';
import { semesterCodes, semesterMonths, semesterTitles } from './constant';

export const semesterValidation = z.object({
    body: z.object({
        title: z.enum([...semesterTitles] as [string, ...string[]], {
            required_error: 'Title is required!',
        }),
        year: z.number({
            required_error: 'Year is required!',
        }),
        code: z.enum([...semesterCodes] as [string, ...string[]], {
            required_error: 'Code is required!',
        }),
        startMonth: z.enum([...semesterMonths] as [string, ...string[]], {
            required_error: 'Start month is required!',
        }),
        endMonth: z.enum([...semesterMonths] as [string, ...string[]], {
            required_error: 'End month is required!',
        }),
    }),
});

export const updateSemesterValidation = z.object({
    body: z.object({
        title: z.enum([...semesterTitles] as [string, ...string[]]).optional(),
        year: z.number().optional(),
        code: z.enum([...semesterCodes] as [string, ...string[]]).optional(),
        startMonth: z.enum([...semesterMonths] as [string, ...string[]]).optional(),
        endMonth: z.enum([...semesterMonths] as [string, ...string[]]).optional(),
    }),
});
