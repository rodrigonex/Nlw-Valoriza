import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IaAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserServide {

    async execute({email, password}: IaAuthenticateRequest){
        const useRepositories = getCustomRepository(UsersRepositories);

        const user = await useRepositories.findOne({
            email
        })

        if(!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, "6425ddbf9cd648e1e4d33c4340d3373d", {
            subject : user.id,
            expiresIn: "1d",
        } 
        );

        return token

    }
}

export { AuthenticateUserServide };