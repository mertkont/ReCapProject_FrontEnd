import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  currentCar:Car;
  dataLoaded = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrandId(params['brandId'])
      }else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar = car;
  }
}
