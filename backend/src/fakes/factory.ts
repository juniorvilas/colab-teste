import { faker } from '@faker-js/faker';
import { GetAllUsersInterfaceOutput } from 'src/interfaces/get-all-users-interface';

export const makeGetAllUsersServiceFactory = (
  data?: Partial<GetAllUsersInterfaceOutput>,
): GetAllUsersInterfaceOutput => ({
  info: {
    page: 1,
    seed: 'abc',
    version: '1.4',
    results: 1,
  },
  results: [
    {
      gender: faker.person.gender(),
      name: {
        title: faker.person.prefix(),
        first: faker.person.firstName(),
        last: faker.person.lastName(),
      },
      location: {
        street: {
          number: 15,
          name: faker.location.street(),
        },
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        postcode: faker.location.zipCode(),
        coordinates: {
          latitude: String(faker.location.latitude()),
          longitude: String(faker.location.longitude()),
        },
        timezone: {
          offset: faker.location.timeZone(),
          description: faker.location.timeZone(),
        },
      },
      email: faker.internet.email(),
      login: {
        uuid: faker.string.uuid(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        salt: faker.string.sample(),
        md5: faker.string.sample(),
        sha1: faker.string.sample(),
        sha256: faker.string.sample(),
      },
      dob: {
        date: String(faker.date.past()),
        age: faker.number.int(),
      },
      registered: {
        date: String(faker.date.past()),
        age: faker.number.int(),
      },
      phone: faker.phone.number(),
      cell: faker.phone.number(),
      id: {
        name: faker.string.uuid(),
        value: faker.string.uuid(),
      },
      picture: {
        large: faker.image.avatar(),
        medium: faker.image.avatar(),
        thumbnail: faker.image.avatar(),
      },
      nat: faker.location.country(),
    },
  ],
  ...data,
});
