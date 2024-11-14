import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get 데코레이터에 매개변수가 없는 경우 기본적으로는 / 경로로 매핑된다.
  @Get()
  getHome() {
    return 'Home Page';
  }

  @Get('post')
  getPost() {
    return 'Post Page';
  }

  @Get('user')
  getUser() {
    return 'User Page';
  }
}
