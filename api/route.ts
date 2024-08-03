import express, {
    Application, Request, Response
} from 'express'
// import connectionMongoDB from "../../lib/mongodb"; 




export function hello(req: Request, res: Response) {
    res.status(200).json({ message: "Hello, World!" });
}
