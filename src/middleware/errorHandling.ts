import { Request, Response, NextFunction } from "express";

function errorHandling(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err.message === "400") {
        return res.status(400).send({
            error: "URL not provided",
        });
    } else {
        return res.status(404).json({
            error: "Not Found",
        });
    }
}
export default errorHandling;
