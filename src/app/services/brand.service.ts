import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:5001/api/brands/getall';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>("https://localhost:5001/api/brands/add", brand);
  }

  getBrandsById(brandId: number) : Observable<ListResponseModel<Brand>>{
    let newPath="https://localhost:5001/api/brands/getbyid?brandid="+brandId
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  update(brand: Brand): Observable<ResponseModel>{
    let newUrl = "https://localhost:5001/api/brands/update"
    return this.httpClient.post<ResponseModel>(newUrl, brand)
  }
}
