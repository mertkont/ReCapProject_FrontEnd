import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/car-detail.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {

  carImages: CarImage[];
  cars: Car [] = [];
  imageUrl='https://localhost:5001/api/carimages/getimages?carid=';
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
        this.getCarImages(params['carId']);
      }
    });
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(response.data)
    })
  }

  getCarImages(carId:number){
    this.carService.getCarImages(carId).subscribe(response => {
      this.cars = response.data;
      console.log(response.data);
    });
  }
}