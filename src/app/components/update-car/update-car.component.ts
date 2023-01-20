import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent {
  updateFormGroup: FormGroup;
  constructor(private carService: CarService, private router:ActivatedRoute, private formBuilder: FormBuilder, private toastrService:ToastrService) {}
    car =new FormGroup({
    brandId:new FormControl(''),
    colorId:new FormControl(''),
    modelYear:new FormControl(''),
    dailyPrice:new FormControl(''),
    description:new FormControl(''),
  });

  ngOnInit(): void {
   this.carService.getCarsById( Number(this.router.snapshot.paramMap.get('id'))).subscribe((result:any)=>{
      this.car =new FormGroup({
        brandId:new FormControl(result.data["brandId"], Validators.required),
        colorId:new FormControl(result.data["colorId"], Validators.required),
        modelYear:new FormControl(result.data["modelYear"], Validators.required),
        dailyPrice:new FormControl(result.data["dailyPrice"], Validators.required),
        description:new FormControl(result.data["description"], Validators.required),
      });
    });
  }
  
  UpdataData(){
   if(this.car.valid){
      let bI:any= this.car.value.brandId;
      let cI:any= this.car.value.colorId;
      let mY:any= this.car.value.modelYear;
      let dP:any= this.car.value.dailyPrice;
      let d:any= this.car.value.description;

      let car:Car=Object.assign({id:Number(this.router.snapshot.paramMap.get('id'))},
      {brandId:bI},{colorId:cI},{modelYear:mY},{dailyPrice:dP},{description:d})

      this.carService.update(car).subscribe(response=>{
        this.toastrService.success(response.message)
      }, responseError=>{
        this.toastrService.error(responseError.error.message)
      })
    }
  }
}