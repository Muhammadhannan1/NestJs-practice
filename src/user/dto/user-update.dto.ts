import { IsEmail, IsString } from "class-validator";

export class updateUser{
    @IsString()
    name:string;
    
    @IsEmail()
    email:string;

    @IsString()
    password:string;
}