import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:5001/api/cars';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'/getcarswithbrandcolorname'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarImages(carId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"carimages/getimages?carid="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'/getcarsbybrandid?brandid='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'/getcarsbycolorid?colorid='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(id:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "/getcardetailsbyid?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(carId:number): Observable<ListResponseModel<Car>>{
    let newUrl:string = this.apiUrl+'/getbyid?id='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newUrl)
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+'/add', car);
  }

  getCarsById(id:number) : Observable<ListResponseModel<Car>>{
    let newPath="https://localhost:5001/api/cars/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  update(car:Car): Observable<ResponseModel>{
    let newUrl = "https://localhost:5001/api/cars/update"
    return this.httpClient.post<ResponseModel>(newUrl, car)
  }
}
