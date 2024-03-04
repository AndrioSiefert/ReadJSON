import { NextFunction, Request, Response } from "express";
import axios from "axios";
import fs from "fs";
import path from "path";

class JsonFormatted {
    static formatted = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const url = req.query.url as string;
            if (!url) {
                const error = new Error("400");
                next(error);
            }
            const response = await axios.get(url);
            const formattedData = JSON.stringify(response.data, null, 2);

            res.header("Content-Type", "application/json").send(formattedData);
        } catch (error) {
            next(error);
        }
    };
    static download = async (req: Request, res: Response) => {
        try {
            const url = req.query.url as string;
            const filePath = path.join(__dirname, "file.txt");

            const response = await axios.get(url);
            const formattedData = JSON.stringify(response.data, null, 2);

            fs.writeFileSync(filePath, formattedData);

            res.download(filePath, "file.txt");
        } catch (error: any) {
            console.error("Failed to fetch data:", error);
            return res.status(500).send(error.message);
        }
    };
}
export default JsonFormatted;
