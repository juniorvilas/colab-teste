import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { AxiosResponse } from 'axios';
import { GetAllUsersDto } from './dtos/get-all-users.dto';
import { GetAllUsersInterfaceOutput } from './interfaces/get-all-users-interface';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getAllUsers({
    results,
    page,
  }: GetAllUsersDto): Promise<GetAllUsersInterfaceOutput> {
    const response: AxiosResponse<GetAllUsersInterfaceOutput> =
      await this.httpService.axiosRef.get(
        `?page=${page}&results=${results}&seed=abc`,
      );

    return response.data;
  }
}
