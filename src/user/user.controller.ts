import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { UserService } from './user.service'

import { CreateUserDto } from './dto/user.dto'

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '新增用户',
  })
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.createOrSave(user)
  }
}
