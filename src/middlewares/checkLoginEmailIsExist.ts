
import {NextFunction, Request, Response} from "express";
import {usersRepository} from "../repositories/users-db-repositories";

// check in Base middleware

export const checkLoginEmailIsExist = async (req: Request, res:Response, next:NextFunction) => {

    try {
        const user = await usersRepository.checkUser(req.body.login, req.body.email);
        if (user) {
            return res.status(400).json({  errorsMessages: [{ message: "User with that login or email already exists", field: "email" }] });
        }
        next();

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
}



