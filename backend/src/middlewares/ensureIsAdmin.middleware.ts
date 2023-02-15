import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

const ensureIsAdmMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const isAdinm = req.user.isAdmin;

	if (!isAdinm) {
		throw new AppError("User is not admin", 401);
	}

	return next();
};

export default ensureIsAdmMiddleware;
