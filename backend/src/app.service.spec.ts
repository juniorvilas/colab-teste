import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { firstValueFrom, of } from 'rxjs';
import { AppService } from './app.service';
import { makeGetAllUsersServiceFactory } from './fakes/factory';
import { GetAllUsersInterfaceOutput } from './interfaces/get-all-users-interface';

describe('App Service', () => {
  let sut: AppService;
  let httpServiceSpy: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: HttpService,
          useValue: {
            axiosRef: {
              get: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    sut = module.get<AppService>(AppService);
    httpServiceSpy = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(httpServiceSpy).toBeDefined();
  });

  it('should fetch all users from API', async () => {
    const mock = makeGetAllUsersServiceFactory();

    const mockResponse: AxiosResponse<GetAllUsersInterfaceOutput> = {
      data: mock,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: undefined,
      },
    };

    jest
      .spyOn(httpServiceSpy.axiosRef, 'get')
      .mockReturnValueOnce(firstValueFrom(of(mockResponse)));

    const result = await sut.getAllUsers({
      page: mock.info.page,
      results: mock.info.results,
    });

    expect(result).toEqual(mockResponse.data);
    expect(httpServiceSpy.axiosRef.get).toHaveBeenCalledWith(
      `?page=${mock.info.page}&results=${mock.info.results}&seed=abc`,
    );
  });

  it('should return an empty array', async () => {
    const expected: GetAllUsersInterfaceOutput =
      {} as GetAllUsersInterfaceOutput;
    const mockResponse: AxiosResponse<GetAllUsersInterfaceOutput> = {
      data: expected,
      status: 204,
      statusText: 'NO CONTENT',
      headers: {},
      config: {
        headers: undefined,
      },
    };

    jest
      .spyOn(httpServiceSpy.axiosRef, 'get')
      .mockReturnValueOnce(firstValueFrom(of(mockResponse)));

    const result = await sut.getAllUsers({ page: 1, results: 10 });

    expect(result).toEqual(expected);
  });
});
