import express from 'express';
import projectController from '../controllers/project.controller';

const router = express.Router();

router.route('/')
  /** GET /api/projects - Get list of projects */
  .get(projectController.list);

router.route('/:projectId')
  /** GET /api/projects/:projectId - Get project */
  .get(projectController.get);

router.route('/:projectId/tasks')
  /** GET /api/projects/:projectId/task - Get project tasks */
  .get(projectController.listTasks);


/** Load project when API with projectId route parameter is hit */
router.param('projectId', projectController.load);

export default router;
