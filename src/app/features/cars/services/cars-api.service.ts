import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Car } from '../models/car.model';
import { MOCK_CARS } from '../../../core/mock/mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarsApiService {

  getCarsByUser(userId: number): Observable<Car[]> {
    return of(
        MOCK_CARS
    );
  }

}