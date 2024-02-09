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
  }: GetAllUsersDto): Promise<AxiosResponse<GetAllUsersInterfaceOutput>> {
    const allUsers = await this.httpService.axiosRef.get(
      `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`,
    );
    return allUsers;
  }

  getUserById(id: string): Promise<AxiosResponse<GetAllUsersInterfaceOutput>> {
    const userById = this.httpService.axiosRef.get(
      `https://randomuser.me/api/?id=${id}`,
    );

    return userById;
  }
}
