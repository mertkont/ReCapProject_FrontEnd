import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getbycarid?carid=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImages(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carimages/getimages?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}