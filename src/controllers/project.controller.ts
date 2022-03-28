import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project.model';

/**
 * Load Project and append to req.
 */
async function load(req: Request, res: Response, next: NextFunction, id: string) {
  try {
    res.locals.project = await Project.findByPk(id);
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * Get Project list.
 * @property {number} req.query.skip - Number of Projects to be skipped.
 * @property {number} req.query.limit - Limit number of Projects to be returned.
 * @returns {Project[]}
 */
async function list(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await Project.findAll({
      offset: parseInt(req.query.skip as string) || 0,
      limit: parseInt(req.query.limit as string) || undefined,
    }));
  } catch (err) {
    next(err);
  }
}
 
/**
 * Get Project
 * @returns {Project}
 */
function get(req: Request, res: Response) {
  return res.json(res.locals.project);
}

/**
 * List project tasks
 * @returns {Task[]}
 */
async function listTasks(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await res.locals.project.getTasks());
  } catch (err) {
    next(err);
  }
}

export default { load, get, list, listTasks };
