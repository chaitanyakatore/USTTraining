import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
  // this the way we use the Req like express in nestjs
  // @Post('signup')
  // signin(@Req() req: Request) {
  //   console.log(req.body);
  //   return this.authService.signin();
  // }

  @Post('signin')
  signin(@Body() dto: AuthDto, @Req() req: Request) {
    req.user;
    return this.authService.signin(dto);
  }
}
