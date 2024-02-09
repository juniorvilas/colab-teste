import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllUsersDto } from './dtos/get-all-users.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  async getAllUsers(@Query() request: GetAllUsersDto) {
    const usersFromApi = this.appService.getAllUsers({
      results: request.results,
      page: request.page,
    });
    return usersFromApi;
  }
}
