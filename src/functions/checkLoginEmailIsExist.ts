
import {usersRepository} from "../repositories/users-db-repositories";

export const checkEmailExist = async (email: string) => {

    const user = await usersRepository.checkUserByEmail(email);

    if (user) {
        return Promise.reject({ errorsMessages: [{ message: "User with that email already exists", field: "email" }] });
    }

};

export const checkLoginExist = async (login: string) => {

    const user = await usersRepository.checkUserByLogin(login);

    if (user) {
        return Promise.reject({ errorsMessages: [{ message: "User with that login already exists", field: "login" }] });
    }

};
/*

export const checkLoginEmailExist = () => {
    return Promise.all([
        check('login')
            .notEmpty().withMessage('Login is required.'),
        check('email')
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Email must be a valid email address.')
            .custom(async (email: string, { req }) => {
                const { login } = req.body;
                const userExists = await usersRepository.checkUser(login, email);
                if (userExists) {
                    throw new Error('User with that login or email already exists');
                }
                return true
            })
    ]);
};
*/



// export const checkLoginEmailExist = async (req: Request, res:Response, next:NextFunction) => {
//     const user = await usersRepository.checkUser(req.body.login, req.body.email);
//     if (user) {
//         throw new Error('User with that login or email already exists');
//     }
//     return true;



/*

export const checkLoginEmailExist = async (req: Request, res:Response, next:NextFunction) => {

    try {
        const user = await usersRepository.checkUser(req.body.login, req.body.email);
        if (user) {
            return res.status(400).json({ errorsMessages: [{ message: "User with that login or email already exists", field: "login" }] });
        }
        next();

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
}

*/


