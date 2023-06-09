import { IsEmail, IsString } from "class-validator";

export class createUser{
    @IsString()
    name:string;
    
    @IsEmail()
    email:string;
   
    @IsString()
    password:string;
}