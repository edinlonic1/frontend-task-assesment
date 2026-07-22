import { Car } from '../../features/cars/models/car.model';

export const MOCK_CARS: Car[] = [
  {
    id: 1,
    brand: 'BMW',
    model: '320i',
    year: 2018,
    licensePlate: 'W-12345',
    ownerId: 1
  },
  {
    id: 2,
    brand: 'Audi',
    model: 'A4',
    year: 2020,
    licensePlate: 'W-67890',
    ownerId: 1
  },
  {
    id: 3,
    brand: 'Mercedes',
    model: 'C220',
    year: 2021,
    licensePlate: 'B-54321',
    ownerId: 2
  },
  {
    id: 4,
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2017,
    licensePlate: 'G-11111',
    ownerId: 3
  },
  {
    id: 5,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    licensePlate: 'S-99999',
    ownerId: 2
  },
  {
    id: 6,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2019,
    licensePlate: 'K-22222',
    ownerId: 4
  }
];