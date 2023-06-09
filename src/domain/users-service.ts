
import {usersRepository} from "../repositories/users-db-repositories";
import {UserDbType, UserViewWhenAdd} from "../repositories/types";
import {v4 as uuidv4} from "uuid";

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(5);


export const usersService= {

    async createUser(login:string, email:string, password: string): Promise <UserViewWhenAdd | null> {

        const hashPassword = await bcrypt.hash(password, salt)

        // bcrypt.hashSync(password, salt);

/*        const newUser = {
            id: (+(new Date())).toString(),
            login: login,
            email: email,
            password: hashPassword,
            createdAt: (new Date()).toISOString()
        }*/

        const newUserDBType = {
            id: (+(new Date())).toString(),
            accountData: {
            login: login,
                email: email,
                password: hashPassword,
                createdAt: (new Date()).toISOString()
        },
        emailConfirmation: {
            confirmationCode: uuidv4(),
                expirationDate: new Date(),
                isConfirmed: true
        }
    }


        const newUserWithoughtId = await usersRepository.createUser(newUserDBType)

        return newUserWithoughtId

    },

    async loginUser(foundUserInDb: UserDbType, loginOrEmail: string, password: string): Promise <boolean> {

        const loginPassword = foundUserInDb.accountData.password

        const validPassword: boolean = await bcrypt.compare(password, loginPassword)

        return validPassword

    },

    async deleteUser(id: string): Promise<boolean> {

        return await usersRepository.deleteUser(id)
    },

    async deleteAllUsers(): Promise<boolean> {
        return usersRepository.deleteAllUsers()

    },

    async findUserById(userId:string) {
        return await usersRepository.findUserById(userId)
    }



}