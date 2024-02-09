import { GetAllUsersInterfaceOutput } from 'src/interfaces/get-all-users-interface';
import { makeGetAllUsersServiceFactory } from './factory';

export class AppServiceStub {
  async getAllUsers(): Promise<GetAllUsersInterfaceOutput> {
    return Promise.resolve(makeGetAllUsersServiceFactory());
  }
}
