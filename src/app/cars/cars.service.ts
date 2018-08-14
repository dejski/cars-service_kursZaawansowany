import { Injectable } from '@angular/core'
import { Car } from './models/car'
// import { Observable } from "rxjs/Observable";
import { Observable } from 'rxjs'
import { Http, RequestOptions, Headers } from '@angular/http'
// import 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars'

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl).pipe(map(res => res.json()))
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(this.apiUrl + `/${id}`).pipe(map(res => res.json()))
  }

  addCar(data): Observable<Car> {
    return this.http.post(this.apiUrl, data).pipe(map(res => res.json()))
  }

  updateCar(id: number, data): Observable<Car> {
    return this.http.put(this.apiUrl + `/${id}`, data).pipe(map(res => res.json()))
  }

  removeCar(id: number): Observable<Car> {
    return this.http.delete(this.apiUrl + `/${id}`).pipe(map(res => res.json()))
  }
}
