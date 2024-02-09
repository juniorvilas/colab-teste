import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { makeGetAllUsersServiceFactory } from './fakes/factory';
import { AppServiceStub } from './fakes/service.mock';

describe('App Controller', () => {
  let sut: AppController;
  let appServiceSpy: AppService;

  beforeEach(async () => {
    const appModule: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useClass: AppServiceStub,
        },
      ],
    }).compile();

    sut = appModule.get<AppController>(AppController);
    appServiceSpy = appModule.get<AppService>(AppService);
  });

  it('should ensure integration with AppService', async () => {
    const mock = makeGetAllUsersServiceFactory();
    const getAllUsersStub = jest
      .spyOn(appServiceSpy, 'getAllUsers')
      .mockResolvedValue(mock);

    const request = { page: 1, results: 10 };

    await sut.getAllUsers(request);

    expect(getAllUsersStub).toHaveBeenCalledWith(request);
    expect(getAllUsersStub).toHaveBeenCalledTimes(1);
  });
});
