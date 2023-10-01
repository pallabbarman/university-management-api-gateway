import { Router } from 'express';
import { createSemester } from './controller';

const router = Router();

router.post('/', createSemester);

const semesterRoutes = router;

export default semesterRoutes;
