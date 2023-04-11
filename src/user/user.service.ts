import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { updateUser } from './dto/user-update.dto';
import { createUser } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {

constructor(
    @InjectRepository(User)
    private userRepositry:Repository<User>){}

get():Promise<User[]>{
    return this.userRepositry.find()
}
createUser(createUserDto:createUser){
    return this.userRepositry.save(createUserDto)
}
updateUser(updateUserDto:updateUser, userId:number){
    return this.userRepositry.update(userId,updateUserDto)
}
getUser(id:number){
    return this.userRepositry.findOne({where : { id }});
}
deleteUser(userId:number){
    return this.userRepositry.delete(userId)
}
}
