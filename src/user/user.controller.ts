import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { updateUser } from './dto/user-update.dto';
import { createUser } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getUsers(){
        return this.userService.get()
    }

    @Post()
    storeUser(@Body() createUserDto:createUser){
        return this.userService.createUser(createUserDto)
    }

    @Patch('/:userId')
    updateUser(@Body() updateUserDto:updateUser, @Param('userId',ParseIntPipe) userId:number){
        return this.userService.updateUser(updateUserDto,userId)
    }
    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId:number){
        return this.userService.getUser(userId)
    }
 @Delete('/:userId')
 deleteUser(@Param('userId',ParseIntPipe) userId:number){
    return this.userService.deleteUser(userId)
 }
}
