import { Request, Response, NextFunction } from 'express';
import sequelize from '../models';

const User = sequelize.models.User;

/**
 * Load user and append to req.
 */
async function load (req: Request, res: Response, next: NextFunction, id: string) {
  try {
    res.locals.user = await User.findByPk(id);
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function list (req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await User.findAll({
      offset: parseInt(req.query.skip as string) || 0,
      limit: parseInt(req.query.limit as string) || undefined,
    }));
  } catch (err) {
    next(err);
  }
}

/**
 * Get user
 * @returns {User}
 */
function get (req: Request, res: Response) {
  return res.json(res.locals.user);
}

/**
 * List projects of user
 * @returns {Projects[]}
 */
async function listProjects (req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await res.locals.user.getProjects());
  } catch (err) {
    next(err);
  }
}

export default { load, get, list, listProjects };
