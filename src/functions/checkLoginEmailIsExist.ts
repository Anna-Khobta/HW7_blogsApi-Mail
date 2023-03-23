
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