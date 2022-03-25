import { Request, Response, NextFunction } from 'express';
import sequelize from '../models';

const Task = sequelize.models.Task;

/**
 * Load Task and append to req.
 */
async function load (req: Request, res: Response, next: NextFunction, id: string) {
  try {
    res.locals.task = await Task.findByPk(id);
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * Get Task list.
 * @property {number} req.query.skip - Number of Tasks to be skipped.
 * @property {number} req.query.limit - Limit number of Tasks to be returned.
 * @returns {Task[]}
 */
async function list (req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await Task.findAll({
      offset: parseInt(req.query.skip as string) || 0,
      limit: parseInt(req.query.limit as string) || undefined,
    }));
  } catch (err) {
    next(err);
  }
}

/**
 * Get Task
 * @returns {Task}
 */
function get (req: Request, res: Response) {
  return res.json(res.locals.Task);
}

export default { load, get, list };
